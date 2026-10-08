import Reveal, { Divider } from "./Reveal.jsx";
export default function Ceremony({ d }) {
  const dt = new Date(d.weddingDate);
  return (
    <Reveal className="block">
      <h2>The Wedding Ceremony</h2><Divider />
      <p className="lead">{dt.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
      <p>{dt.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</p>
      <p className="lead">{d.venue}</p><p>{d.address}</p>
    </Reveal>
  );
}
