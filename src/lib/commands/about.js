import { windowManager } from '../WindowManager.js';

export const aboutCommand = async (args, terminal) => {
  const contentHTML = `
    <div style="padding: 24px; padding-bottom: 32px; box-sizing: border-box;">
      <div class="profile-section">
        <img src="https://cdn.sudothy.me/vanity/fallback.png" alt="Profile" class="profile-pic" onerror="this.src='https://via.placeholder.com/80'" />
      <div class="profile-name">Thy - About Me</div>
    </div>
    <div class="info-grid">
      <div class="info-group">
        <h3>Languages</h3>
        <div class="tag-container">
          <div class="tag"><div class="tag-icon">🇧🇪</div>Flemish</div>
          <div class="tag"><div class="tag-icon">🇧🇪</div>French</div>
          <div class="tag"><div class="tag-icon">🇧🇷</div>Portuguese</div>
          <div class="tag"><div class="tag-icon">🇦🇷</div>Spanish</div>
          <div class="tag"><div class="tag-icon">🇬🇧</div>English</div>
          <div class="tag"><div class="tag-icon">🇸🇪</div>Swedish</div>
        </div>
      </div>
      <div class="info-group">
        <h3>Nationalities</h3>
        <div class="tag-container">
          <div class="tag"><div class="tag-icon">🇧🇪</div>Belgian</div>
          <div class="tag"><div class="tag-icon">🇧🇷</div>Brazilian</div>
        </div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>Professional Titles</h3>
      <div class="tag-container">
        <div class="tag-text-only">Senior Community Manager</div>
        <div class="tag-text-only">Account Project Manager</div>
        <div class="tag-text-only">Operations Manager</div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>Licenses & certifications</h3>
      <div class="tag-container">
        <div class="tag-text-only">EF SET English Certificate 72/100 (C1 Advanced)</div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>Skills</h3>
      <div class="tag-container">
        <div class="tag-text-only">Applied Mathematics</div>
        <div class="tag-text-only">Data Analysis</div>
        <div class="tag-text-only">Analytical Skills</div>
        <div class="tag-text-only">Community Marketing</div>
        <div class="tag-text-only">Customer Experience Management</div>
        <div class="tag-text-only">Project Planning</div>
        <div class="tag-text-only">Web3</div>
        <div class="tag-text-only">Sales Operations</div>
        <div class="tag-text-only">Agile Methodologies</div>
        <div class="tag-text-only">Trust and Safety</div>
        <div class="tag-text-only">Risk Management</div>
        <div class="tag-text-only">Global Networking</div>
        <div class="tag-text-only">Customer Relationship Management (CRM)</div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>Tech Stack</h3>
      <div class="tag-container">
        <div class="tag-text-only">HTML</div>
        <div class="tag-text-only">CSS</div>
        <div class="tag-text-only">Javascript</div>
        <div class="tag-text-only">Python</div>
        <div class="tag-text-only">Lua</div>
        <div class="tag-text-only">C</div>
        <div class="tag-text-only">Node.js</div>
        <div class="tag-text-only">Astro</div>
        <div class="tag-text-only">Cloudflare</div>
        <div class="tag-text-only">Google Cloud</div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>Interests & Hobbies</h3>
      <div class="tag-container">
        <div class="tag-text-only">Systems Information Tech</div>
        <div class="tag-text-only">Linguistics</div>
        <div class="tag-text-only">Philosophy</div>
        <div class="tag-text-only">Frietjes</div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px; line-height: 1.5; font-size: 14px;">
      <h3>Experience</h3>
      <p>I have worked directly with brands such as Fusion, Discord, Tencent, and Garena, ensuring strategic support and audience connection.</p>
    </div>
    </div>
  `;
  windowManager.createWindow('Thy - About Me', contentHTML);
};

export const aboutMetadata = {
  description: 'Open information about me',
  args: []
};
