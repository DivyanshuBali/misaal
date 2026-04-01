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
          I am convinced in the power of fiction. Through imagination, the
          architect composes the materials to create the immaterial. his ability
          to stir sense of wonder in all who encounter it is that which inspires
          me.
        </p>
      </div>
    ),
  },
  {
    title: "about",
    content: (
      <div className={styles.prose}>
        <p>
          Mannat Singh is an architect based in Chandigarh. He graduated with a
          gold medal from the Faculty of Architecture at CEPT University, where
          he also served as a program ambassador and was the founding chief
          editor of the college newsletter. He is currently leading projects at
          Imarat Architects, a practice engaged with questions of material
          culture and construction.
        </p>
        <p>
          His work extends across buildings, furniture, objects, and garments he
          constructs for himself—approaching each as a way of thinking through
          material, construction, and use. Alongside this, his drawings and
          writings return to historical environments and their transformations
          over time, treating them as active sites of inquiry rather than static
          references.
        </p>
        <p>
          He is currently working with schools of architecture across the
          country and undertaking documentation of relevant sites, developing
          these inquiries through a self-directed research practice. This has
          taken form as MISAAL, a research-based making studio that brings
          together processes of redrawing and construction to study and rework
          architectural intelligence into contemporary projects and artefacts.
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
          design - across scales, from the intimate to the inhabitable.
        </p>
        <p>Misaal incorporates a two-pronged method of study and making.</p>
        <p>
          It studies the Indian imagination as it is located across paintings,
          places—both historical and contemporary—habits, and objects. And then
          examines them across five lenses: composition, construction, context,
          intent, and chromatics; in order to isolate the architectural
          intelligence embedded within them.
        </p>
        <p>
          These extracted intelligibilities are reworked into projects and
          artefacts, developed in close collaboration with artisans and informed
          equally by contemporary and historical material cultures; varying in
          scale but rooted in inquiry.
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
          <div className={styles.leftContent}>
            <Accordion sections={sections} defaultOpenIndex={0} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/mannat_studio.jpeg"
              alt="Background texture"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
