import { authManager, AuthState } from './auth.js';
import { commandEngine } from './CommandEngine.js';
import { localesFetcher } from './LocalesFetcher.js';

class Terminal {
  constructor() {
    this.container = document.getElementById('terminal-container');
    this.output = document.getElementById('terminal-output');
    this.inputWrapper = document.getElementById('terminal-input-wrapper');
    this.promptPrefix = document.getElementById('prompt-prefix');
    this.promptChar = document.getElementById('prompt-char');
    this.inputDisplay = document.getElementById('input-display');
    this.hiddenInput = document.getElementById('hidden-input');

    this.currentPrompt = '';
    this.isMasked = false;

    this.init();
  }

  async init() {
    this.setupEventListeners();
    
    await authManager.init();

    if (authManager.state === AuthState.PROMPT_LOGIN) {
      const sys = await localesFetcher.fetchSystem() || {};
      this.printLine(sys.welcome || 'Welcome to sudothy.me v1.0');
      this.printLine(sys.welcome_sub || 'This system is built to be easily used by you, with minimal bloat.\nTo see a list of available tasks, run \'help\'. To see a list of available interfaces, run \'interfaces --list\'.\n');
      this.setPrompt(sys.login_prompt || 'login (leave empty to use as guest): ');
    } else {
      await this.printMOTD();
      this.setPrompt(`sudothy@${authManager.user?.username || 'user'} $ `);
    }

    this.prompt();
  }

  setupEventListeners() {
    document.addEventListener('click', () => {
      this.hiddenInput.focus();
    });

    this.hiddenInput.addEventListener('input', (e) => {
      this.updateInputDisplay();
    });

    this.hiddenInput.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        const value = this.hiddenInput.value;
        const inputValue = this.isMasked ? '*'.repeat(value.length) : value;
        let promptHTML = this.currentPrompt;
        if (authManager.state === AuthState.READY && this.currentPrompt.endsWith('$ ')) {
          const prefix = this.currentPrompt.slice(0, -2);
          promptHTML = `<span class="terminal-prompt">${prefix}</span> <span style="color:var(--ubuntu-text);margin-right:8px;">$</span>`;
        }
        this.printLine(promptHTML + inputValue, true);
        this.hiddenInput.value = '';
        this.updateInputDisplay();
        this.inputWrapper.style.display = 'none';

        if (authManager.state !== AuthState.READY) {
          await authManager.handleInput(value, this);
        } else {
          await commandEngine.execute(value, this);
          this.prompt();
        }
      } else if (e.ctrlKey && e.key === 'c') {
        const value = this.hiddenInput.value;
        const inputValue = this.isMasked ? '*'.repeat(value.length) : value;
        let promptHTML = this.currentPrompt;
        if (authManager.state === AuthState.READY && this.currentPrompt.endsWith('$ ')) {
          const prefix = this.currentPrompt.slice(0, -2);
          promptHTML = `<span class="terminal-prompt">${prefix}</span> <span style="color:var(--ubuntu-text);margin-right:8px;">$</span>`;
        }
        this.printLine(promptHTML + inputValue + '^C', true);
        this.hiddenInput.value = '';
        this.updateInputDisplay();
        this.prompt();
      }
    });
  }

  updateInputDisplay() {
    this.inputDisplay.textContent = this.isMasked 
      ? '*'.repeat(this.hiddenInput.value.length)
      : this.hiddenInput.value;
    this.scrollToBottom();
  }

  printLine(text, asHTML = false) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    if (asHTML) {
      line.innerHTML = text;
    } else {
      line.textContent = text;
    }
    this.output.appendChild(line);
    this.scrollToBottom();
  }

  setPrompt(promptText) {
    this.currentPrompt = promptText;
    this.promptPrefix.textContent = promptText;
    this.promptChar.style.display = promptText.endsWith('$ ') ? 'none' : 'none'; 
  }

  setMasked(masked) {
    this.isMasked = masked;
    this.updateInputDisplay();
  }

  async printMOTD() {
    const sys = await localesFetcher.fetchSystem() || {};
    const date = new Date().toString();
    this.printLine(sys.motd_welcome || `Welcome to sudothy (v1.0)`);
    this.printLine(sys.motd_docs || ` * Documentation: <a href="https://github.com/okaythi/gewoonthy" target="_blank" class="terminal-link">https://sudothy.me/github</a>`, true);
    this.printLine(``);
    this.printLine(sys.motd_logout || `To log out of this session, type 'logout'.`);
    this.printLine(`${sys.motd_last_login || 'Last login:'} ${date} from 127.0.0.1`);
  }

  prompt() {
    this.inputWrapper.style.display = 'block';
    this.hiddenInput.focus();
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.container.scrollTop = this.container.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.terminal = new Terminal();

  window.addEventListener('beforeunload', () => {
    if (authManager.user && authManager.user.is_guest) {
      navigator.sendBeacon('/api/auth', JSON.stringify({ action: 'logout', token: authManager.token }));
    }
  });
});
