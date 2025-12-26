import React from "react";
import BounceCards from "../BounceCards/BounceCards";
import styles from "./LandingCards.module.css";

const nodesConfig = [
  {
    backgroundColor: "#FFFFFF",
    zIndex: 0,
  },
  {
    backgroundColor: "#253B76",
    zIndex: 1,
  },
  {
    backgroundColor: "#A61E25",
    zIndex: 2,
  },
  {
    backgroundColor: "#FF8D28",
    zIndex: 1,
  },
  {
    backgroundColor: "#215C2A",
    zIndex: 0,
  },
]

const nodes = nodesConfig.map((node, index) => {
  return (
    <div className={styles.landingCard} style={{ backgroundColor: node.backgroundColor }}>
      <div className={styles.catalogueMetaContainer}>
        <h4>LOG <div className={styles.divider} /> {index + 1}</h4>

        <div>FURNITURE</div>
        <div>MANNAT SINGH</div>
        <div>मिसाल</div>
      </div>
    </div>
  )
});

const transformStyles = [
  "rotate(-5deg) translate(-250px, -10px)",
  "rotate(-10deg) translate(-120px, -25px)",
  "rotate(0deg)",
  "rotate(0deg) translate(120px, -10px)",
  "rotate(8deg) translate(250px, -30px)",
];

function LandingCards() {
  return (
    <BounceCards
      className="custom-bounceCards"
      nodesConfig={nodes as never[]}
      nodesDetails={nodesConfig as never[]}
      containerWidth={500}
      containerHeight={250}
      animationDelay={0.2}
      animationStagger={0.08}
      transformStyles={transformStyles}
    />
  );
}

export default LandingCards;
