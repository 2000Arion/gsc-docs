import type { I18nConfig } from "@docusaurus/types";

const i18n: I18nConfig = {
  path: "i18n",
  defaultLocale: "de-DE",
  locales: ["de-DE"],
  localeConfigs: {
    "de-DE": {
      label: "Deutsch",
      direction: "ltr",
    },
  },
};

export default i18n;
