// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
//const zhNavbar = require("./src/components/LocalizedNavbar/Navbar.zh");
//const enNavbar = require("./src/components/LocalizedNavbar/Navbar.en");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "a.wpzllq.top-Tag filtering, keyword search, and one-click copy prompts",
  // tagline: '方便中文使用 ChatGPT 快捷指令',
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://a.wpzllq.top",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "xuxizhen", // Usually your GitHub org/user name.
  projectName: "Prompt100", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en", "ja", "ko"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
      ja: {
        htmlLang: "ja-JP",
      },
      ko: {
        htmlLang: "ko-KR",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: "sidebars.js",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-R8Q1SLY219",
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: "/",
            from: "/cn",
          },
        ],
      },
    ],
    // [
    //   "docusaurus2-plugin-google-adsense",
    //   {
    //     dataAdClient: "ca-pub-7585955822109216",
    //   },
    // ],
    "./plugins/piwik.js",
    "./plugins/instantpage.js",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {
          name: "keywords",
          content:
            "prompt,ChatGPT,AI prompts，提示词",
        },
      ],
      navbar: {
        hideOnScroll: true,
        title: "a.wpzllq.top",
        logo: {
          alt: "a.wpzllq.top",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   to: "docs",
          //   label: "使用说明",
          //   position: "left",
          // },
          // {
          //   type: "dropdown",
          //   label: "浏览器扩展",
          //   position: "left",
          //   items: [
          //     {
          //       label: "Chrome 扩展",
          //       href: "https://chrome.google.com/webstore/detail/chatgpt-shortcut/blcgeoojgdpodnmnhfpohphdhfncblnj",
          //     },
          //     {
          //       label: "Edge 扩展",
          //       href: "https://microsoftedge.microsoft.com/addons/detail/chatgpt-shortcut/hnggpalhfjmdhhmgfjpmhlfilnbmjoin",
          //     },
          //   ],
          // },
          // {
          //   type: "dropdown",
          //   label: "其他工具",
          //   position: "left",
          //   items: [
          //     {
          //       label: "IMGPrompt",
          //       href: "https://prompt.newzone.top/",
          //     },
          //     {
          //       label: "文字处理",
          //       href: "https://tools.newzone.top/",
          //     },
          //     {
          //       label: "工具收藏",
          //       href: "https://nav.newzone.top",
          //     },
          //     {
          //       label: "Find on Product Hunt",
          //       href: "https://www.producthunt.com/posts/chatgpt-shortcut?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut",
          //     },
          //   ],
          // },
          // {
          //   to: "/feedback",
          //   label: "反馈",
          //   position: "left",
          // },
       
          // {
          //   href: "https://discord.gg/PZTQfJ4GjX",
          //   position: "right",
          //   className: "header-discord-link",
          // },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} a.wpzllq.top`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      /* announcementBar: {
        id: 'announcement_bar',
        content: getAnnouncement(),
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      }, */
    }),
};

module.exports = config;

/* process.env.DOCUSAURUS_CURRENT_LOCALE ??= "zh-Hans";
function getNavbar() {
  switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en":
      return enNavbar;
    default:
      return zhNavbar;
  }
} */
/* function getAnnouncement() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en": return 'Announcement_en';
    default: return 'Announcement_cn';
  }
} */
