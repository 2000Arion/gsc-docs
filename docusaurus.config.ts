import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import 'dotenv/config';

const config: Config = {
  title: "Arion2000.xyz Gameservers",
  tagline: "Dokumentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.arion2000.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de-DE",
    locales: ["de-DE"],
  },

  themes: ["docusaurus-theme-search-typesense"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/2000Arion/gsc-docs/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,

          blogSidebarTitle: "Aktuelle Beiträge",
          blogSidebarCount: 10,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/2000Arion/gsc-docs/tree/main/",

          routeBasePath: "news",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    typesense: {
      // Replace this with the name of your index/collection.
      // It should match the "index_name" entry in the scraper's "config.json" file.
      typesenseCollectionName: "gsc-docs",

      typesenseServerConfig: {
        nodes: [
          {
            host: "panel.nodes.arion2000.xyz",
            port: 8108,
            protocol: "http",
          },
        ],
        apiKey: process.env.TYPESENSE_API_KEY,
      },

      // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      typesenseSearchParameters: {},

      // Optional
      contextualSearch: true,
    },
    navbar: {
      title: "Arion2000.xyz Gameservers",
      style: "dark",
      //logo: {
      //  alt: 'My Site Logo',
      //  src: 'img/logo.svg',
      //},
      items: [
        {
          type: "docSidebar",
          sidebarId: "minecraftSidebar",
          position: "left",
          label: "Minecraft",
        },
        {
          type: "docSidebar",
          sidebarId: "genericSidebar",
          position: "left",
          label: "Discord Bots",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docusaurus Tutorial",
        },
        { to: "/news", label: "Neuigkeiten", position: "right" },
        {
          href: "https://panel.arion2000.xyz",
          position: "right",
          label: "Zum Panel",
          "aria-label": "GSC-Panel Login",
        },
        {
          href: "https://github.com/2000Arion/gsc-docs",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/tutorial/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.arion2000.xyz",
            },
            {
              label: "Hilfe erhalten",
              to: "/support",
            },
          ],
        },
        {
          title: "Mehr",
          items: [
            {
              label: "Neuigkeiten",
              to: "/news",
            },
            {
              label: "GSC-Panel Login",
              href: "https://panel.arion2000.xyz/",
            },
            {
              label: "GitHub",
              href: "https://github.com/2000Arion/gsc-docs",
            },
          ],
        },
      ],
      copyright: `<p class="left"><a class="footer-link" rel="noopener nofollow noreferrer" href="https://www.arion2000.xyz" target="_blank"><img src="/img/a2data_logo_white_large.png" alt="a2data logo"/></a> &copy; ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
