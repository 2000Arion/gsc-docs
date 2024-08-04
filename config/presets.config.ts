const presets: [string, any][] = [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/2000Arion/gsc-docs/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "Aktuelle Beiträge",
          blogSidebarCount: 10,
          editUrl: "https://github.com/2000Arion/gsc-docs/tree/main/",
          routeBasePath: "news",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ];
  
  export default presets;
  