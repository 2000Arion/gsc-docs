import type { Footer } from "@docusaurus/theme-common";
import { execSync } from "child_process";
import { format } from "date-fns";
import { toZonedTime, format as formatTz } from "date-fns-tz";
import { de } from "date-fns/locale";
import { readFileSync } from "fs";
import { join } from "path";

let currentCommit: string;
let commitDate: string;
let packageVersion: string;
/* let branchName: string; */

const timeZone = "Europe/Berlin";

try {
  // Get the current commit hash
  currentCommit = execSync("git rev-parse HEAD").toString().slice(0, 7).trim();

  // Get the commit date
  const rawDate = execSync("git show -s --format=%ci HEAD").toString().trim();
  const date = new Date(rawDate);
  const zonedDate = toZonedTime(date, timeZone);
  commitDate = formatTz(zonedDate, "dd.MM.yyyy HH:mm", { locale: de });

  // Get the package version
  const packageJsonPath = join(__dirname, "..", "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  packageVersion = packageJson.version;

  /* // Get the branch name containing the current commit
  const branches = execSync(`git branch -a --contains ${currentCommit}`)
    .toString()
    .split('\n')
    .map(branch => branch.trim())
    .filter(branch => !branch.includes('remotes/') && branch.length > 0);

  // Select the first branch name that is not a remote branch
  branchName = branches.length > 0 ? branches[0] : "unknown"; */
} catch (error) {
  console.error("Failed to get the build data:", error);
  currentCommit = "commit";
  commitDate = "Please check the log for errors.";
  packageVersion = "version";
  /* branchName = "unknown"; */
}

const footer: Footer = {
  style: "dark",
  links: [
    {
      title: "Docs",
      items: [
        {
          label: "Server bestellen",
          to: "/docs/minecraft/server-bestellen",
        },
        {
          label: "Minecraft Server",
          to: "/docs/minecraft",
        },
        {
          label: "Discord Bots",
          to: "/docs/generic",
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
          label: "Status",
          href: "https://status.arion2000.xyz/"
        },
        {
          label: "GitHub",
          href: "https://github.com/2000Arion/gsc-docs",
        },
      ],
    },
  ],
  copyright: `<p>&copy; ${new Date().getFullYear()} <a class="footer__copyright_notice" rel="noopener nofollow noreferrer" href="https://www.arion2000.xyz" target="_blank"><img src="/assets/images/footer_copyright_watermark.png" alt="a2data logo"/></a></p><div id="footer__copyright_git">Build: <a href="https://github.com/2000Arion/gsc-docs/commit/${currentCommit}">v${packageVersion}/${currentCommit}</a> - ${commitDate}</div>`,
};

export default footer;
