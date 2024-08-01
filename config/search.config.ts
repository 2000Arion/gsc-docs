import type { ThemeConfig } from "@docusaurus/types";
import 'dotenv/config';

const search: ThemeConfig["typesense"] = {
  // Replace this with the name of your index/collection.
  // It should match the "index_name" entry in the scraper's "config.json" file.
  typesenseCollectionName: "gsc-docs",

  typesenseServerConfig: {
    nodes: [
      {
        host: "gsc-docs-search.servers.com.de",
        port: 443,
        protocol: "https",
      },
    ],
    apiKey: process.env.TYPESENSE_API_KEY as string, // Ensure to provide the correct API key.
  },

  // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
  typesenseSearchParameters: {},

  // Optional
  contextualSearch: true,
};

export default search;
