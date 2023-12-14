import React, { useEffect, useRef, useState } from "react";

const PsIntro = () => {
  const [scrolled, setScrolled] = useState(1);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollLen = Math.ceil((scrollPx / winHeightPx) * 505);
        setScrolled(scrollLen);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="ps_header">
      <div className="header_main_ps">
        <img
          src={`../../src/assets/psintro/${scrolled.toString().padStart(4, '0')}.jpg`}
          alt="No Signal..."
        />
      </div>
    </header>
  );
};

export default PsIntro;
