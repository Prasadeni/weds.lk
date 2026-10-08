import Reveal from "./Reveal.jsx";
import Countdown from "./Countdown.jsx";
export default function WeddingDate({ d }) {
  const dt = new Date(d.weddingDate);
  const f = o => dt.toLocaleDateString("en-GB", o);
  const time = dt.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }).replace(":00", "");
  return (
    <Reveal className="block dark std">
      <div className="arch">
        <svg className="curve" viewBox="0 0 300 90" aria-label="Save the date" role="img">
          <path id="arc" d="M30 80C60 20 240 20 270 80" fill="none" />
          <text><textPath href="#arc" startOffset="50%" textAnchor="middle">SAVE THE DATE</textPath></text>
        </svg>
        <p className="script">{d.brideName}</p><p className="script amp2">&amp;</p><p className="script">{d.groomName}</p>
        <p className="sans">Together with their families<br />invite you to their wedding celebration</p>
        <p className="yr">{f({ year: "numeric" })}</p>
        <div className="drow"><span>{f({ weekday: "long" })}</span><b>{f({ day: "numeric" })}</b><span>at {time}</span></div>
        <p className="mo">{f({ month: "long" })}</p>
        <p className="sans strong">PORUWA CEREMONY</p><p className="sans">AT {d.poruwaTime}</p>
        <img className="lt l1" src="/images/lotus.svg" alt="" aria-hidden="true" /><img className="lt l2" src="/images/lotus.svg" alt="" aria-hidden="true" />
        <img className="lf" src="/images/leaf.svg" alt="" aria-hidden="true" />
      </div>
      <h2 className="cd-h">Counting down to our day</h2>
      <Countdown date={d.weddingDate} />
    </Reveal>
  );
}
