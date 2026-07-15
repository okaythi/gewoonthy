import { authManager, AuthState } from './auth.js';
import { commandEngine } from './CommandEngine.js';

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
    
    this.printLine('Welcome to sudothy.me v1.0');
    this.printLine('This system is built to be easily used by you, with minimal bloat. To see a list of available tasks, run \'help\'. To see a list of available interfaces, run \'interfaces --list\'.\n');

    await authManager.init();

    if (authManager.state === AuthState.PROMPT_LOGIN) {
      this.setPrompt('login (leave empty to use as guest): ');
    } else {
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
        this.printLine(this.currentPrompt + (this.isMasked ? '*'.repeat(value.length) : value));
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
        this.printLine(this.currentPrompt + (this.isMasked ? '*'.repeat(this.hiddenInput.value.length) : this.hiddenInput.value) + '^C');
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
});
