import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  id: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Minecraft Server",
    id: "/docs/minecraft",
    description: (
      <>
        Erfahre, wie du deinen Minecraft Server einrichten und personalisieren,
        Plugins oder Mods hochladen und andere Einstellungen vornehmen kannst.
      </>
    ),
  },
  {
    title: "Discord Bot-Hosting",
    id: "/docs/generic",
    description: (
      <>
        Erfahre, wie du ein GitHub Repository verbinden oder wie du mit
        Websockets arbeiten kannst.
      </>
    ),
  },
  {
    title: "Wird bald hinzugefügt...",
    id: "#",
    description: (
      <>
        <label>
          <div className={styles.alert}>
            <span className={styles.alertText}>
              <svg
                className={styles.infoSvg}
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="style=bulk">
                  <g id="warning-box">
                    <path
                      id="vector (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8Z"
                      fill="#BFBFBF"
                    />
                    <path
                      id="vector (Stroke)_2"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V14.1047C12.75 14.5189 12.4142 14.8547 12 14.8547C11.5858 14.8547 11.25 14.5189 11.25 14.1047V7C11.25 6.58579 11.5858 6.25 12 6.25Z"
                      fill="#000000"
                    />
                    <path
                      id="ellipse (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 17C11 16.4477 11.4477 16 12 16H12.01C12.5623 16 13.01 16.4477 13.01 17C13.01 17.5523 12.5623 18 12.01 18H12C11.4477 18 11 17.5523 11 17Z"
                      fill="#000000"
                    />
                  </g>
                </g>
              </svg>
              &nbsp;Es würde uns freuen, wenn du auf&nbsp;
              <a href="https://github.com/2000Arion/gsc-docs" target="_blank">
                GitHub
              </a>
              &nbsp;beim Aufbau der Dokumentation mithilfst!&nbsp;
            </span>
          </div>
        </label>
      </>
    ),
  },
];

function Feature({ title, id, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link href={id}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <br></br>
      <Heading as={"h1"} className={styles.center}>
        Was bringt dich hierher?
      </Heading>
      <p className={styles.center}>
        Wähle einen Themenbereich aus, um die entsprechende Dokumentation
        aufzurufen.
      </p>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
