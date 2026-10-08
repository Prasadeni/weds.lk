import Reveal, { Lotus } from "./Reveal.jsx";
export default function Timeline({ d }) {
  return (
    <Reveal className="block">
      <h2>Our Wedding Day</h2>
      <ol className="timeline">{d.timeline.map(([t, n]) => (
        <li key={t}><Lotus w={26} className="mk" /><b>{t}</b><span>{n}</span></li>))}</ol>
    </Reveal>
  );
}
