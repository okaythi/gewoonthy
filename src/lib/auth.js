import { localesFetcher } from './LocalesFetcher.js';

export const AuthState = {
  BOOTING: 'BOOTING',
  PROMPT_LOGIN: 'PROMPT_LOGIN',
  PROMPT_PASSWORD: 'PROMPT_PASSWORD',
  READY: 'READY',
  PROMPT_CREATE_USER: 'PROMPT_CREATE_USER',
  PROMPT_CREATE_PASS: 'PROMPT_CREATE_PASS',
  PROMPT_DELETE_USER: 'PROMPT_DELETE_USER'
};

class AuthManager {
  constructor() {
    this.state = AuthState.BOOTING;
    this.user = null;
    this.loginInput = '';
    this.createInput = '';
    this.deleteTarget = '';
  }

  async init() {
    const sessionStr = localStorage.getItem('sudothy_session');
    if (sessionStr) {
      try {
        if (session && session.user && session.token) {
          this.user = session.user;
          this.token = session.token;
          this.state = AuthState.READY;
          return;
        }
      } catch (e) {}
    }
    this.state = AuthState.PROMPT_LOGIN;
  }

  async handleInput(input, terminal) {
    const sys = await localesFetcher.fetchSystem() || {};
    if (this.state === AuthState.PROMPT_LOGIN) {
      if (!input.trim()) {
        try {
          const res = await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify({ action: 'guest' })
          });
          if (!res.ok) throw new Error('Guest login failed');
          const data = await res.json();
          
          this.user = data.user;
          this.token = data.token;
          this.state = AuthState.READY;
          localStorage.setItem('sudothy_session', JSON.stringify({ user: this.user, token: this.token }));
          await terminal.printMOTD();
          terminal.setPrompt(`sudothy@${this.user.username} $ `);
        } catch (e) {
          terminal.printLine(sys.login_guest_failed || `Guest login failed`);
          this.state = AuthState.PROMPT_LOGIN;
          terminal.setPrompt(sys.login_prompt || `login (leave empty to use as guest): `);
        }
        terminal.prompt();
      } else {
        this.loginInput = input.trim();
        this.state = AuthState.PROMPT_PASSWORD;
        terminal.setPrompt(sys.login_password_prompt || `[password]: `);
        terminal.setMasked(true);
        terminal.prompt();
      }
    } else if (this.state === AuthState.PROMPT_PASSWORD) {
      terminal.setMasked(false);
      try {
        const res = await fetch('/api/auth', {
          method: 'POST',
          body: JSON.stringify({ action: 'login', username: this.loginInput, password: input })
        });
        if (!res.ok) throw new Error('Login failed');
        const data = await res.json();
        this.user = data.user;
        this.token = data.token;
        localStorage.setItem('sudothy_session', JSON.stringify({ user: this.user, token: this.token }));
        this.state = AuthState.READY;
        await terminal.printMOTD();
        terminal.setPrompt(`sudothy@${this.user.username} $ `);
      } catch (e) {
        terminal.printLine(sys.login_incorrect || `Login incorrect`);
        this.state = AuthState.PROMPT_LOGIN;
        terminal.setPrompt(sys.login_prompt || `login (leave empty to use as guest): `);
      }
      terminal.prompt();
    } else if (this.state === AuthState.PROMPT_CREATE_USER) {
      if (!input.trim()) {
        terminal.printLine(sys.auth_acc_empty || `account: username cannot be empty`);
        this.state = AuthState.READY;
        terminal.setPrompt(`sudothy@${this.user.username} $ `);
        terminal.prompt();
        return;
      }
      this.createInput = input.trim();
      this.state = AuthState.PROMPT_CREATE_PASS;
      terminal.setPrompt(sys.auth_acc_new_pass || `New password: `);
      terminal.setMasked(true);
      terminal.prompt();
    } else if (this.state === AuthState.PROMPT_CREATE_PASS) {
      terminal.setMasked(false);
      try {
        const res = await fetch('/api/auth', {
          method: 'POST',
          body: JSON.stringify({ action: 'create', username: this.createInput, password: input })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Username taken or error');
        terminal.printLine(sys.auth_acc_created || `Account created successfully. Logging in...`);
        this.user = data.user;
        this.token = data.token;
        localStorage.setItem('sudothy_session', JSON.stringify({ user: this.user, token: this.token }));
        this.state = AuthState.READY;
        await terminal.printMOTD();
        terminal.setPrompt(`sudothy@${this.user.username} $ `);
      } catch (e) {
        const errMsg = sys.auth_acc_creation_failed ? sys.auth_acc_creation_failed.replace('{err}', e.message) : `account: creation failed (${e.message})`;
        terminal.printLine(errMsg);
        this.state = AuthState.READY;
        terminal.setPrompt(`sudothy@${this.user.username} $ `);
      }
      terminal.prompt();
    } else if (this.state === AuthState.PROMPT_DELETE_USER) {
      if (input.trim().toLowerCase() === 'y') {
        try {
          const res = await fetch('/api/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify({ action: 'delete', username: this.deleteTarget })
          });
          if (!res.ok) throw new Error('Deletion failed');
          const succMsg = sys.auth_acc_del_success ? sys.auth_acc_del_success.replace('{user}', this.deleteTarget) : `User '${this.deleteTarget}' deleted successfully.`;
          terminal.printLine(succMsg);
        } catch (e) {
          terminal.printLine(sys.auth_acc_del_fail || `account: deletion failed`);
        }
      } else {
        terminal.printLine(sys.auth_acc_del_cancel || `account: deletion cancelled.`);
      }
      this.state = AuthState.READY;
      terminal.setPrompt(`sudothy@${this.user.username} $ `);
      terminal.prompt();
    }
  }

  async logout(terminal) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify({ action: 'logout' })
    });
    localStorage.removeItem('sudothy_session');
    this.user = null;
    this.token = null;
    this.state = AuthState.PROMPT_LOGIN;
    const sys = await localesFetcher.fetchSystem() || {};
    terminal.setPrompt(sys.login_prompt || `login (leave empty to use as guest): `);
    terminal.prompt();
  }
}

export const authManager = new AuthManager();
