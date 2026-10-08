import { Lotus } from "./Reveal.jsx";

export default function Hero({ d }) {
  return (
    <header className="hero">
      <Lotus w={110} />
      <p className="small">Together with their families</p>
      <h1>{d.brideName}<span className="amp">&amp;</span>{d.groomName}</h1>
      <p className="small">Joyfully invite you to celebrate their wedding</p>
      
      {/* The Arch Photo */}
      <div className="hero-arch">
        <img 
          src={d.couplePhoto || "/images/couple.png"} 
          alt={`${d.brideName} and ${d.groomName}`} 
        />
      </div>
    </header>
  );
}