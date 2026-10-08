import Reveal, { Lotus } from "./Reveal.jsx";
export default function ThankYou({ d }) {
  const date = new Date(d.weddingDate).toLocaleDateString("en-CA").replaceAll("-", ".");
  return (
    <Reveal className="block dark thanks">
      <h2 className="script big">Thank You</h2>
      <div className="frame"><img src={d.thankPhoto || "/images/couple.png"} alt={`${d.brideName} and ${d.groomName}`} loading="lazy" /></div>
      <p className="sans">{d.thankText}</p>
      <Lotus w={90} />
      
      {/*
      <p className="script big">{d.brideName} &amp; {d.groomName}</p>
      <p className="sans strong">{date}</p> */}
    </Reveal>
  );
}
