import { windowManager } from '../WindowManager.js';

export const aboutCommand = async (args, terminal) => {
  const contentHTML = `
    <div class="profile-section">
      <img src="https://cdn.sudothy.me/vanity/fallback.png" alt="Profile" class="profile-pic" onerror="this.src='https://via.placeholder.com/80'" />
      <div class="profile-name">Thy - About Me</div>
    </div>
    <div class="info-grid">
      <div class="info-group">
        <h3>Personality</h3>
        <div class="tag-container">
          <div class="tag"><div class="tag-icon">🧐</div>CURIOUS MIND</div>
          <div class="tag"><div class="tag-icon">🎯</div>DETAIL-ORIENTED</div>
          <div class="tag"><div class="tag-icon">🤝</div>COLLABORATIVE</div>
          <div class="tag"><div class="tag-icon">💡</div>CREATIVE PROBLEM</div>
        </div>
      </div>
      <div class="info-group">
        <h3>Abilities</h3>
        <div class="tag-container">
          <div class="tag"><div class="tag-icon">📈</div>TECHNICAL STRATEGY</div>
          <div class="tag"><div class="tag-icon">💻</div>FULL-STACK DEVELOPMENT</div>
          <div class="tag"><div class="tag-icon">🚀</div>PERFORMANCE OPTIMIZATION</div>
        </div>
      </div>
      <div class="info-group">
        <h3>Languages</h3>
        <div class="tag-container">
          <div class="tag">be-nl</div>
          <div class="tag">be-fr</div>
          <div class="tag">pt-br</div>
          <div class="tag">es-ar</div>
          <div class="tag">en-uk</div>
          <div class="tag">sv-sv</div>
        </div>
      </div>
      <div class="info-group">
        <h3>Nationalities</h3>
        <div class="tag-container">
          <div class="tag-text-only">BE</div>
        </div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>Professional Titles</h3>
      <div class="tag-container">
        <div class="tag-text-only">FOUNDER & CTO</div>
        <div class="tag-text-only">SENIOR SYSTEMS ENGINEER</div>
        <div class="tag-text-only">USER EXPERIENCE STRATEGIST</div>
      </div>
    </div>
  `;
  windowManager.createWindow('Thy - About Me', contentHTML);
};
