import fs from 'fs/promises';
import path from 'path';

const localizations = {
  'nl-BE': {
    about: {
      "title": "Thy - Over Mij",
      "languages_title": "Talen",
      "nationalities_title": "Nationaliteiten",
      "professional_titles": "Professionele Titels",
      "licenses_title": "Licenties & certificaten",
      "skills_title": "Vaardigheden",
      "tech_stack_title": "Tech Stack",
      "interests_title": "Interesses & Hobby's",
      "experience_title": "Ervaring",
      "experience_text": "Ik heb rechtstreeks samengewerkt met merken zoals Fusion, Discord, Tencent en Garena, waarbij ik zorgde voor strategische ondersteuning en verbinding met het publiek.",
      "lang_flemish": "Vlaams",
      "lang_french": "Frans",
      "lang_portuguese": "Portugees",
      "lang_spanish": "Spaans",
      "lang_english": "Engels",
      "lang_swedish": "Zweeds",
      "nat_belgian": "Belgisch",
      "nat_brazilian": "Braziliaans"
    },
    projects: {
      "tab_recent": "Recent",
      "tab_starred": "Met ster",
      "tab_coding": "Coderen",
      "tab_music": "Muziek",
      "tab_professional": "Professioneel",
      "empty_choose": "Kies een optie in het menu om deze hier te zien.",
      "empty_nothing": "Nog niets te zien hier.",
      "card_karaoke": "Karaoke"
    },
    karaoke: {
      "about_project": "Over dit project",
      "failed_load": "Kan markdown-inhoud niet laden."
    }
  },
  'fr-BE': {
    about: {
      "title": "Thy - À propos de moi",
      "languages_title": "Langues",
      "nationalities_title": "Nationalités",
      "professional_titles": "Titres Professionnels",
      "licenses_title": "Licences & certifications",
      "skills_title": "Compétences",
      "tech_stack_title": "Tech Stack",
      "interests_title": "Intérêts & Loisirs",
      "experience_title": "Expérience",
      "experience_text": "J'ai travaillé directement avec des marques telles que Fusion, Discord, Tencent et Garena, assurant un soutien stratégique et une connexion avec le public.",
      "lang_flemish": "Flamand",
      "lang_french": "Français",
      "lang_portuguese": "Portugais",
      "lang_spanish": "Espagnol",
      "lang_english": "Anglais",
      "lang_swedish": "Suédois",
      "nat_belgian": "Belge",
      "nat_brazilian": "Brésilien"
    },
    projects: {
      "tab_recent": "Récent",
      "tab_starred": "Favoris",
      "tab_coding": "Codage",
      "tab_music": "Musique",
      "tab_professional": "Professionnel",
      "empty_choose": "Choisissez une option dans le menu pour la voir ici.",
      "empty_nothing": "Rien à afficher pour le moment.",
      "card_karaoke": "Karaoké"
    },
    karaoke: {
      "about_project": "À propos de ce projet",
      "failed_load": "Échec du chargement du contenu markdown."
    }
  },
  'pt-BR': {
    about: {
      "title": "Thy - Sobre Mim",
      "languages_title": "Idiomas",
      "nationalities_title": "Nacionalidades",
      "professional_titles": "Títulos Profissionais",
      "licenses_title": "Licenças & certificações",
      "skills_title": "Habilidades",
      "tech_stack_title": "Tech Stack",
      "interests_title": "Interesses & Hobbies",
      "experience_title": "Experiência",
      "experience_text": "Trabalhei diretamente com marcas como Fusion, Discord, Tencent e Garena, garantindo suporte estratégico e conexão com o público.",
      "lang_flemish": "Flamengo",
      "lang_french": "Francês",
      "lang_portuguese": "Português",
      "lang_spanish": "Espanhol",
      "lang_english": "Inglês",
      "lang_swedish": "Sueco",
      "nat_belgian": "Belga",
      "nat_brazilian": "Brasileiro"
    },
    projects: {
      "tab_recent": "Recente",
      "tab_starred": "Favoritos",
      "tab_coding": "Programação",
      "tab_music": "Música",
      "tab_professional": "Profissional",
      "empty_choose": "Escolha uma opção no menu para ver aqui.",
      "empty_nothing": "Nada para mostrar aqui ainda.",
      "card_karaoke": "Karaokê"
    },
    karaoke: {
      "about_project": "Sobre este projeto",
      "failed_load": "Falha ao carregar conteúdo markdown."
    }
  },
  'es-AR': {
    about: {
      "title": "Thy - Sobre Mí",
      "languages_title": "Idiomas",
      "nationalities_title": "Nacionalidades",
      "professional_titles": "Títulos Profesionales",
      "licenses_title": "Licencias & certificaciones",
      "skills_title": "Habilidades",
      "tech_stack_title": "Tech Stack",
      "interests_title": "Intereses & Hobbies",
      "experience_title": "Experiencia",
      "experience_text": "Trabajé directamente con marcas como Fusion, Discord, Tencent y Garena, asegurando soporte estratégico y conexión con la audiencia.",
      "lang_flemish": "Flamenco",
      "lang_french": "Francés",
      "lang_portuguese": "Portugués",
      "lang_spanish": "Español",
      "lang_english": "Inglés",
      "lang_swedish": "Sueco",
      "nat_belgian": "Belga",
      "nat_brazilian": "Brasileño"
    },
    projects: {
      "tab_recent": "Reciente",
      "tab_starred": "Destacados",
      "tab_coding": "Programación",
      "tab_music": "Música",
      "tab_professional": "Profesional",
      "empty_choose": "Elegí una opción del menú para verla acá.",
      "empty_nothing": "No hay nada para mostrar acá todavía.",
      "card_karaoke": "Karaoke"
    },
    karaoke: {
      "about_project": "Sobre este proyecto",
      "failed_load": "Error al cargar contenido markdown."
    }
  },
  'sv-SE': {
    about: {
      "title": "Thy - Om Mig",
      "languages_title": "Språk",
      "nationalities_title": "Nationaliteter",
      "professional_titles": "Yrkesroller",
      "licenses_title": "Licenser & certifieringar",
      "skills_title": "Färdigheter",
      "tech_stack_title": "Tech Stack",
      "interests_title": "Intressen & Hobbyer",
      "experience_title": "Erfarenhet",
      "experience_text": "Jag har arbetat direkt med varumärken som Fusion, Discord, Tencent och Garena, för att säkerställa strategiskt stöd och publikkontakt.",
      "lang_flemish": "Flamländska",
      "lang_french": "Franska",
      "lang_portuguese": "Portugisiska",
      "lang_spanish": "Spanska",
      "lang_english": "Engelska",
      "lang_swedish": "Svenska",
      "nat_belgian": "Belgisk",
      "nat_brazilian": "Brasiliansk"
    },
    projects: {
      "tab_recent": "Senaste",
      "tab_starred": "Stjärnmärkt",
      "tab_coding": "Kodning",
      "tab_music": "Musik",
      "tab_professional": "Professionell",
      "empty_choose": "Välj ett alternativ i menyn för att se det här.",
      "empty_nothing": "Inget att visa här ännu.",
      "card_karaoke": "Karaoke"
    },
    karaoke: {
      "about_project": "Om detta projekt",
      "failed_load": "Det gick inte att ladda markdown-innehåll."
    }
  },
  'ja-JP': {
    about: {
      "title": "Thy - 概要",
      "languages_title": "言語",
      "nationalities_title": "国籍",
      "professional_titles": "職名",
      "licenses_title": "ライセンスと認定",
      "skills_title": "スキル",
      "tech_stack_title": "Tech Stack",
      "interests_title": "趣味と関心",
      "experience_title": "経験",
      "experience_text": "Fusion、Discord、Tencent、Garenaなどのブランドと直接協力し、戦略的なサポートとオーディエンスとのつながりを確保してきました。",
      "lang_flemish": "フラマン語",
      "lang_french": "フランス語",
      "lang_portuguese": "ポルトガル語",
      "lang_spanish": "スペイン語",
      "lang_english": "英語",
      "lang_swedish": "スウェーデン語",
      "nat_belgian": "ベルギー国籍",
      "nat_brazilian": "ブラジル国籍"
    },
    projects: {
      "tab_recent": "最近",
      "tab_starred": "お気に入り",
      "tab_coding": "コーディング",
      "tab_music": "音楽",
      "tab_professional": "プロフェッショナル",
      "empty_choose": "メニューのオプションを選択すると、ここに表示されます。",
      "empty_nothing": "まだ表示するものがありません。",
      "card_karaoke": "カラオケ"
    },
    karaoke: {
      "about_project": "このプロジェクトについて",
      "failed_load": "Markdownコンテンツの読み込みに失敗しました。"
    }
  },
  'en-US': {
    about: {
      "title": "Thy - About Me",
      "languages_title": "Languages",
      "nationalities_title": "Nationalities",
      "professional_titles": "Professional Titles",
      "licenses_title": "Licenses & certifications",
      "skills_title": "Skills",
      "tech_stack_title": "Tech Stack",
      "interests_title": "Interests & Hobbies",
      "experience_title": "Experience",
      "experience_text": "I have worked directly with brands such as Fusion, Discord, Tencent, and Garena, ensuring strategic support and audience connection.",
      "lang_flemish": "Flemish",
      "lang_french": "French",
      "lang_portuguese": "Portuguese",
      "lang_spanish": "Spanish",
      "lang_english": "English",
      "lang_swedish": "Swedish",
      "nat_belgian": "Belgian",
      "nat_brazilian": "Brazilian"
    },
    projects: {
      "tab_recent": "Recent",
      "tab_starred": "Starred",
      "tab_coding": "Coding",
      "tab_music": "Music",
      "tab_professional": "Professional",
      "empty_choose": "Choose an option on the menu to see it here.",
      "empty_nothing": "Nothing to show here yet.",
      "card_karaoke": "Karaoke"
    },
    karaoke: {
      "about_project": "About this project",
      "failed_load": "Failed to load markdown content."
    }
  },
  'de-DE': {
    about: {
      "title": "Thy - Über mich",
      "languages_title": "Sprachen",
      "nationalities_title": "Nationalitäten",
      "professional_titles": "Berufstitel",
      "licenses_title": "Lizenzen & Zertifizierungen",
      "skills_title": "Fähigkeiten",
      "tech_stack_title": "Tech Stack",
      "interests_title": "Interessen & Hobbys",
      "experience_title": "Erfahrung",
      "experience_text": "Ich habe direkt mit Marken wie Fusion, Discord, Tencent und Garena zusammengearbeitet und dabei strategische Unterstützung und Publikumsbindung sichergestellt.",
      "lang_flemish": "Flämisch",
      "lang_french": "Französisch",
      "lang_portuguese": "Portugiesisch",
      "lang_spanish": "Spanisch",
      "lang_english": "Englisch",
      "lang_swedish": "Schwedisch",
      "nat_belgian": "Belgisch",
      "nat_brazilian": "Brasilianisch"
    },
    projects: {
      "tab_recent": "Zuletzt verwendet",
      "tab_starred": "Markiert",
      "tab_coding": "Codierung",
      "tab_music": "Musik",
      "tab_professional": "Professionell",
      "empty_choose": "Wählen Sie eine Option im Menü, um sie hier zu sehen.",
      "empty_nothing": "Hier gibt es noch nichts zu sehen.",
      "card_karaoke": "Karaoke"
    },
    karaoke: {
      "about_project": "Über dieses Projekt",
      "failed_load": "Markdown-Inhalt konnte nicht geladen werden."
    }
  },
  'zh-CN': {
    about: {
      "title": "Thy - 关于我",
      "languages_title": "语言",
      "nationalities_title": "国籍",
      "professional_titles": "专业头衔",
      "licenses_title": "许可证和认证",
      "skills_title": "技能",
      "tech_stack_title": "Tech Stack",
      "interests_title": "兴趣与爱好",
      "experience_title": "经验",
      "experience_text": "我曾直接与 Fusion、Discord、Tencent 和 Garena 等品牌合作，确保战略支持和受众连接。",
      "lang_flemish": "弗拉芒语",
      "lang_french": "法语",
      "lang_portuguese": "葡萄牙语",
      "lang_spanish": "西班牙语",
      "lang_english": "英语",
      "lang_swedish": "瑞典语",
      "nat_belgian": "比利时",
      "nat_brazilian": "巴西"
    },
    projects: {
      "tab_recent": "最近",
      "tab_starred": "已加星标",
      "tab_coding": "编码",
      "tab_music": "音乐",
      "tab_professional": "专业",
      "empty_choose": "在菜单上选择一个选项以在此处查看。",
      "empty_nothing": "这里还没有什么可展示的。",
      "card_karaoke": "卡拉OK"
    },
    karaoke: {
      "about_project": "关于此项目",
      "failed_load": "加载 markdown 内容失败。"
    }
  }
};

async function generateLocalizations() {
  for (const [locale, data] of Object.entries(localizations)) {
    const localeDir = path.join(process.cwd(), 'locales', locale, 'windows');
    
    // Write about/ui.json
    await fs.mkdir(path.join(localeDir, 'about'), { recursive: true });
    await fs.writeFile(path.join(localeDir, 'about', 'ui.json'), JSON.stringify(data.about, null, 2));
    
    // Write projects/ui.json
    await fs.mkdir(path.join(localeDir, 'projects'), { recursive: true });
    await fs.writeFile(path.join(localeDir, 'projects', 'ui.json'), JSON.stringify(data.projects, null, 2));
    
    // Write karaoke/ui.json
    await fs.mkdir(path.join(localeDir, 'karaoke'), { recursive: true });
    await fs.writeFile(path.join(localeDir, 'karaoke', 'ui.json'), JSON.stringify(data.karaoke, null, 2));
    
    console.log(`Generated high-fidelity localization for ${locale}`);
  }
}

generateLocalizations().catch(console.error);
