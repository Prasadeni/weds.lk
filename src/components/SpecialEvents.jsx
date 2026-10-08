import Reveal from "./Reveal.jsx";
export default function SpecialEvents({ d }) {
  if (!d.events?.length) return null;
  return (
    <Reveal className="block">
      <h2>Special Moments</h2>
      {d.events.map(e => (
        <article className="event" key={e.title}><h3>{e.title}</h3><p>{e.date} · {e.time}</p><p>{e.venue}</p><p className="muted">{e.text}</p></article>))}
    </Reveal>
  );
}
