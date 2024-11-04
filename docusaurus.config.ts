import { themes as prismThemes } from "prism-react-renderer";

// Config Files
import navbar from "./config/navbar.config";
import footer from "./config/footer.config";
import search from "./config/search.config";
import i18n from "./config/i18n.config";
import presets from "./config/presets.config";

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import 'dotenv/config';

const config: Config = {
  title: "Arion2000.xyz Gameservers",
  tagline: "Dokumentation",
  favicon: "/assets/images/favicon.ico",

  url: "https://docs.arion2000.xyz",
  baseUrl: "/",

  organizationName: "2000Arion",
  projectName: "gsc-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: i18n,

  themes: ["docusaurus-theme-search-typesense"],

  presets: presets,

  future: {
    experimental_faster: true,
  },

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      { name: 'og:site_name', content: 'Arion2000.xyz Gameservers' },
      { name: 'theme-color', content: '#22d3ee' },
    ],
    typesense: search,

    navbar: navbar,
    footer: footer,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
