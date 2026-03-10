"use client";

import Script from "next/script";

export function AlamancFlipbook() {
  return (
    <>
      <Script
        src="https://cdnc.heyzine.com/release/addons.5.min.js"
        strategy="lazyOnload"
        // onLoad={() => {
        //   heyzinea.addons.init();
        // }}
      />
      <iframe
        title="Almanac"
        allowFullScreen
        allow="clipboard-write"
        className="fp-iframe"
        style={{
          border: "0px solid transparent",
          width: "100%",
          height: "100%",
        }}
        src="https://heyzine.com/flip-book/7514646a71.html"
      />
    </>
  );
}
