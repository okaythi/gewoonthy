import { supabase } from './supabase.js';

export const AuthState = {
  BOOTING: 'BOOTING',
  PROMPT_LOGIN: 'PROMPT_LOGIN',
  PROMPT_PASSWORD: 'PROMPT_PASSWORD',
  READY: 'READY'
};

class AuthManager {
  constructor() {
    this.state = AuthState.BOOTING;
    this.user = null;
    this.tempUsername = null;
    this.loginInput = '';
  }

  async init() {
    const sessionStr = localStorage.getItem('sudothy_session');
    if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        if (session && session.user) {
          this.user = session.user;
          this.state = AuthState.READY;
          return;
        }
      } catch (e) {}
    }
    this.state = AuthState.PROMPT_LOGIN;
  }

  async fetchGuestUsername() {
    try {
      const adjRes = await fetch('https://random-word-form.herokuapp.com/random/adjective');
      const nounRes = await fetch('https://random-word-form.herokuapp.com/random/noun');
      const [adj] = await adjRes.json();
      const [noun] = await nounRes.json();
      return `${adj}-${noun}`;
    } catch (e) {
      return `guest-${Math.floor(Math.random() * 10000)}`;
    }
  }

  async handleInput(input, terminal) {
    if (this.state === AuthState.PROMPT_LOGIN) {
      if (!input.trim()) {
        this.tempUsername = await this.fetchGuestUsername();
        terminal.printLine(`A temporary username has been assigned to you, to create an account use 'account --create'.`);
        this.user = { username: this.tempUsername, isGuest: true };
        this.state = AuthState.READY;
        terminal.setPrompt(`sudothy@${this.user.username} $ `);
        terminal.prompt();
      } else {
        this.loginInput = input.trim();
        this.state = AuthState.PROMPT_PASSWORD;
        terminal.setPrompt(`[password]: `);
        terminal.setMasked(true);
        terminal.prompt();
      }
    } else if (this.state === AuthState.PROMPT_PASSWORD) {
      terminal.setMasked(false);
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: this.loginInput,
          password: input
        });
        if (error) throw error;
        this.user = data.user;
        localStorage.setItem('sudothy_session', JSON.stringify({ user: this.user }));
        this.state = AuthState.READY;
        terminal.setPrompt(`sudothy@${this.user.email.split('@')[0]} $ `);
      } catch (e) {
        terminal.printLine(`Login incorrect`);
        this.state = AuthState.PROMPT_LOGIN;
        terminal.setPrompt(`login (leave empty to use as guest): `);
      }
      terminal.prompt();
    }
  }
}

export const authManager = new AuthManager();
