import { windowManager } from '../WindowManager.js';
import { localesFetcher } from '../LocalesFetcher.js';

export const aboutCommand = async (args, terminal) => {
  const i18n = await localesFetcher.fetchWindow('about');
  if (!i18n) {
    terminal.printLine('Error: Could not load locale strings for about window.');
    return;
  }

  const contentHTML = `
    <div style="padding: 24px; padding-bottom: 32px; box-sizing: border-box;">
      <div class="profile-section">
        <img src="https://cdn.sudothy.me/vanity/fallback.png" alt="Profile" class="profile-pic" onerror="this.src='https://via.placeholder.com/80'" />
      <div class="profile-name">${i18n.title}</div>
    </div>
    <div class="info-grid">
      <div class="info-group">
        <h3>${i18n.languages_title}</h3>
        <div class="tag-container">
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/be.png" alt="🇧🇪" style="width: 20px; vertical-align: middle;"></div>${i18n.lang_flemish}</div>
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/be.png" alt="🇧🇪" style="width: 20px; vertical-align: middle;"></div>${i18n.lang_french}</div>
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/br.png" alt="🇧🇷" style="width: 20px; vertical-align: middle;"></div>${i18n.lang_portuguese}</div>
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/ar.png" alt="🇦🇷" style="width: 20px; vertical-align: middle;"></div>${i18n.lang_spanish}</div>
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/gb.png" alt="🇬🇧" style="width: 20px; vertical-align: middle;"></div>${i18n.lang_english}</div>
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/se.png" alt="🇸🇪" style="width: 20px; vertical-align: middle;"></div>${i18n.lang_swedish}</div>
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/jp.png" alt="🇯🇵" style="width: 20px; vertical-align: middle;"></div>${i18n.lang_japanese}</div>
        </div>
      </div>
      <div class="info-group">
        <h3>${i18n.nationalities_title}</h3>
        <div class="tag-container">
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/be.png" alt="🇧🇪" style="width: 20px; vertical-align: middle;"></div>${i18n.nat_belgian}</div>
          <div class="tag"><div class="tag-icon"><img src="https://flagcdn.com/w20/br.png" alt="🇧🇷" style="width: 20px; vertical-align: middle;"></div>${i18n.nat_brazilian}</div>
        </div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>${i18n.professional_titles}</h3>
      <div class="tag-container">
        <div class="tag-text-only">Senior Community Manager</div>
        <div class="tag-text-only">Account Project Manager</div>
        <div class="tag-text-only">Operations Manager</div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>${i18n.licenses_title}</h3>
      <div class="tag-container">
        <div class="tag-text-only">EF SET English Certificate 72/100 (C1 Advanced)</div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px;">
      <h3>${i18n.skills_title}</h3>
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
      <h3>${i18n.tech_stack_title}</h3>
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
      <h3>${i18n.interests_title}</h3>
      <div class="tag-container">
        <div class="tag-text-only">Systems Information Tech</div>
        <div class="tag-text-only">Linguistics</div>
        <div class="tag-text-only">Philosophy</div>
        <div class="tag-text-only">Frietjes</div>
      </div>
    </div>
    <div class="info-group" style="margin-top:20px; line-height: 1.5; font-size: 14px;">
      <h3>${i18n.experience_title}</h3>
      <p>${i18n.experience_text}</p>
    </div>
    </div>
  `;
  windowManager.createWindow(i18n.title, contentHTML);
};

export const aboutMetadata = {
  description: 'Open information about me',
  args: []
};
