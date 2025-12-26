"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

export default function BounceCards({
  className = "",
  nodesConfig = [],
  containerWidth = 400,
  containerHeight = 400,
  nodesDetails = [],
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = true,
}) {

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getNoTranslateTransform = (translateStr) => {
    const translateRegex = /translate\(([-0-9.]+)px(?:,\s*([-0-9.]+)px)?\)/;
    const match = translateStr.match(translateRegex);
    
    if (match) {
      // If there's a Y value (2D translate), preserve the format with 0px for both
      const replacement = match[2] !== undefined 
        ? "translate(0px, 0px)" 
        : "translate(0px)";
      return translateStr.replace(translateRegex, replacement);
    } else if (translateStr === "none") {
      return "translate(0px)";
    } else {
      return `${translateStr} translate(0px)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === "none"
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover) return;
    nodesConfig.forEach((_, i) => {
      gsap.killTweensOf(`.card-${i}`);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(`.card-${i}`, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: "back.out(1)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -130 : 130;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(`.card-${i}`, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;
    nodesConfig.forEach((_, i) => {
      gsap.killTweensOf(`.card-${i}`);
      const baseTransform = transformStyles[i] || "none";
      gsap.to(`.card-${i}`, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {nodesConfig.map((node, idx) => (
        <div
          key={idx}
          className={`card card-${idx}`}
          style={{
            transform: transformStyles[idx] ?? "none",
            zIndex: nodesDetails[idx].zIndex,
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          {node}
        </div>
      ))}
    </div>
  );
}
