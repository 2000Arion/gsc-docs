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
        Es würde uns freuen, wenn du auf{" "}
        <a href="https://github.com/2000Arion/gsc-docs" target="_blank">
          GitHub
        </a>{" "}
        beim Aufbau der Dokumentation mithilfst!
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
