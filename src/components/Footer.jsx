import { Lotus } from "./Reveal.jsx";
import ShareButton from "./ShareButton.jsx";

export default function Footer({ d }) {
  const date = new Date(d.weddingDate)
    .toLocaleDateString("en-CA")
    .replaceAll("-", ".");

  return (
    <footer className="foot">
      <div className="foot-divider" aria-hidden="true">
        <i /><Lotus w={64} /><i />
      </div>

      <p className="foot-blessing">With love and blessings</p>
      <p className="foot-names">{d.brideName} &amp; {d.groomName}</p>
      <p className="foot-date">{date}</p>

      <ShareButton url={d.invitationUrl} />

      <div className="foot-brand">
        <span>Crafted with love by</span>
        <b>weds.lk</b>
      </div>
    </footer>
  );
}