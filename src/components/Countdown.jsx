import { useEffect, useState } from "react";
const calc = t => { const s = Math.max(0, Math.floor((new Date(t) - Date.now()) / 1000));
  return { done: s === 0, days: Math.floor(s / 86400), hours: Math.floor(s % 86400 / 3600), minutes: Math.floor(s % 3600 / 60), seconds: s % 60 }; };
export default function Countdown({ date }) {
  const [t, setT] = useState(() => calc(date));
  useEffect(() => { const id = setInterval(() => setT(calc(date)), 1000); return () => clearInterval(id); }, [date]);
  if (t.done) return <p className="today">Today is the day! ❤️</p>;
  return <div className="count" role="timer" aria-label="Countdown to the wedding">{["days","hours","minutes","seconds"].map(k => (
    <div key={k}><b>{String(t[k]).padStart(2, "0")}</b><span>{k}</span></div>))}</div>;
}
