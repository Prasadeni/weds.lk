import { useState } from "react";
import { Lotus } from "./Reveal.jsx";
const wax = (() => { let p = ""; for (let i = 0; i < 64; i++) { const a = i / 64 * Math.PI * 2, r = 29 + 2.2 * Math.sin(a * 8); p += `${i ? "L" : "M"}${(34 + r * Math.cos(a)).toFixed(1)} ${(34 + r * Math.sin(a)).toFixed(1)}`; } return p + "Z"; })();
export default function EnvelopeIntro({ d, onDone }) {
  const [phase, setPhase] = useState(0); // 0 closed, 1 flap opens, 2 card rises, 3 fade out
  const open = () => {
    if (phase) return;
    setPhase(1);
    setTimeout(() => setPhase(2), 1500);
    setTimeout(() => setPhase(3), 4200);
    setTimeout(onDone, 5600);
  };
  const date = new Date(d.weddingDate).toLocaleDateString("en-CA").replaceAll("-", ".");
  return (
    <div className={`intro p${phase}`}>
      <button className="env" onClick={open} aria-label="Tap to open the wedding invitation">
        <span className="card-in">
          <span className="sans">With all our love,<br />we cordially invite you<br />to the wedding of</span>
          <span className="script">{d.brideName} &amp; {d.groomName}</span>
          <Lotus w={84} /><span className="sans dt">{date}</span>
          <img className="card-couple" src={d.cardCouple || "/images/couple.png"} alt="" aria-hidden="true" />
        </span>
        <span className="pocket" /><span className="flap" />
        <svg className="seal" viewBox="0 0 68 68" aria-hidden="true"><defs><radialGradient id="gw" cx=".35" cy=".3"><stop offset="0" stop-color="#f3dc9a"/><stop offset=".6" stop-color="#c9a24f"/><stop offset="1" stop-color="#8f6b2a"/></radialGradient></defs>
          <path d={wax} fill="url(#gw)" /><circle cx="34" cy="34" r="24" fill="none" stroke="#7a5a20" strokeOpacity=".6" strokeWidth="1.6" strokeDasharray="1.2 2.6" strokeLinecap="round"/>
          <g fill="#8f6b2a" fillOpacity=".85"><path d="M34 14C27 24 27 33 34 45C41 33 41 24 34 14Z"/><path d="M34 45C23 43 17 36 15 27C25 28 32 34 34 45Z"/><path d="M34 45C45 43 51 36 53 27C43 28 36 34 34 45Z"/><path d="M34 47C25 51 18 49 13 43C21 41 29 43 34 47Z"/><path d="M34 47C43 51 50 49 55 43C47 41 39 43 34 47Z"/></g></svg>
        <span className="tap">Tap to open</span>
      </button>
    </div>
  );
}
