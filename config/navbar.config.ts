import { Navbar } from "@docusaurus/theme-common";

// don't specify style or hideOnScroll here, we want it to be dynamic
const navbar: Omit<Navbar, "style" | "hideOnScroll"> = {
  title: "Arion2000.xyz Gameservers",
  //style: "dark",
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
};

export default navbar;
