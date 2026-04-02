"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="fixed bottom-8 right-8 z-40 transition-all duration-300"
      style={{
        width: "2.8rem",
        height: "2.8rem",
        backgroundColor: "#3d0a1e",
        border: "1px solid rgba(184,137,31,0.5)",
        borderRadius: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(61,10,30,0.25)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a1030")}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#3d0a1e")}
    >
      {/* Fleur-de-lis simplificada como flecha hacia arriba */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5" stroke="#d4a83a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 2.5 Q8 0.5 11 2.5" stroke="rgba(212,168,58,0.45)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
