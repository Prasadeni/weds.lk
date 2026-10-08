import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
export default function Gallery({ d }) {
  const [sel, setSel] = useState(null);
  useEffect(() => { const k = e => e.key === "Escape" && setSel(null); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  return (
    <Reveal className="block">
      <h2>Moments We Cherish</h2>
      <div className="masonry">{d.gallery.map((s, i) => (
        <button key={s} onClick={() => setSel(s)} aria-label={`Open photo ${i + 1}`}><img loading="lazy" src={s} alt={`Wedding photo ${i + 1}`} /></button>))}</div>
      {sel && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSel(null)}>
        <button className="x" aria-label="Close photo">✕</button><img src={sel} alt="Enlarged wedding photo" /></div>}
    </Reveal>
  );
}
