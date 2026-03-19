import Image from "next/image";
import type { AccordionSection } from "./Accordion";
import { Accordion } from "./Accordion";
import styles from "./page.module.css";

const sections: AccordionSection[] = [
  {
    title: "inquiry",
    content: (
      <div className={styles.prose}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies consectetur elit id iaculis. Aenean auctor, orci a accumsan
          tristique, ex leo vehicula augue, id dignissim justo orci facilisis
          turpis. Donec sagittis, leo vitae interdum convallis, lectus elit
          tristique lectus, in consequat purus odio id ipsum. Duis maximus felis
          sed lectus fermentum, in vehicula sapien lobortis.
        </p>
      </div>
    ),
  },
  {
    title: "about",
    content: (
      <div className={styles.prose}>
        <p>
          Aliquam nec accumsan ante, sit amet iaculis erat. Integer lacinia,
          ipsum in convallis viverra, tortor tortor dignissim massa, a venenatis
          odio massa vel tortor. Phasellus nulla nisl, molestie mollis mollis
          id, sodales quis odio. Etiam molestie sollicitudin neque, eu vulputate
          ipsum mattis congue. Integer fringilla enim massa, non efficitur purus
          molestie id. Proin ullamcorper tellus dignissim augue auctor
          condimentum. Nam in quam non quam bibendum tempor. Nulla purus nunc,
          auctor quis luctus venenatis, fermentum ut ligula. Cras eu elit sit
          amet turpis feugiat euismod. Curabitur blandit lacinia tortor nec
          pretium.
        </p>
        <p>
          Nulla nec magna velit. Praesent mollis lacus eu tempus consectetur.
          Nunc magna urna, hendrerit ac arcu id, facilisis scelerisque libero.
          Nulla sagittis tortor neque, vitae pulvinar nibh fringilla non. Donec
          arcu lorem, convallis non justo sed, scelerisque elementum felis. Nunc
          ut massa posuere, feugiat est non, faucibus nunc. Proin pulvinar
          tincidunt nibh. Praesent porttitor orci ligula, et rhoncus ex aliquet
          non. Mauris efficitur scelerisque aliquet. In hac habitasse platea
          dictumst. Cras interdum, est at luctus rhoncus, magna eros blandit
          nibh, at sagittis massa ipsum id magna. Donec cursus, urna vitae
          placerat placerat, erat massa molestie massa, vel vestibulum massa
          augue a orci. Phasellus ultricies sed libero in pretium.
        </p>
      </div>
    ),
  },
  {
    title: "education & experience",
    content: (
      <div className={styles.experienceTable}>
        <div className={styles.experienceRow}>
          <span className={styles.year}>2023</span>
          <div>
            <span className={styles.role}>Exchange Program</span>
            <span className={styles.place}>ETSAM Mumbai</span>
          </div>
        </div>
        <div className={styles.experienceRow}>
          <span className={styles.year}>2018 - 2023</span>
          <div>
            <span className={styles.role}>Student of Architecture</span>
            <span className={styles.place}>FA, CEPT University, Ahmedabad</span>
          </div>
        </div>
        <div className={styles.experienceRow}>
          <span className={styles.year}>2021</span>
          <div>
            <span className={styles.role}>Internship</span>
            <span className={styles.place}>Studio Interweave, Gangtok</span>
          </div>
        </div>
        <div className={styles.experienceRow}>
          <span className={styles.year}>2018</span>
          <div>
            <span className={styles.role}>High School Graduation</span>
            <span className={styles.place}>Vivek High School</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "misaal",
    titleClassName: styles.misaalTitle,
    content: (
      <div className={styles.prose}>
        <p>
          misaal (modern indian studies on art architecture and life) attempts
          to discover architecture from outside the discipline, in objects,
          habits and fictions. The knowledge that surfaces is translated into
          design – across scales, from the intimate to the inhabitable.
        </p>
        <a href="https://misaal.co" className={styles.misaalLink}>
          misaal.co
        </a>
      </div>
    ),
  },
  {
    title: "contact",
    content: (
      <div className={styles.contactInfo}>
        <p>1252/1 sector 43b, Chandigarh</p>
        <p>+91 9988111252</p>
        <div className={styles.contactLinks}>
          <a href="mailto:mannat@misaal.co">mannat@misaal.co</a>
          <a
            href="https://instagram.com/mannatarchive"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mannatarchive
          </a>
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutRoot}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Accordion sections={sections} defaultOpenIndex={0} />
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/bg-texture.jpeg"
              alt="About Misaal"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
