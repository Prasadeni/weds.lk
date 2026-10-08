import Reveal from "./Reveal.jsx";
export default function Location({ d }) {
  const dt = new Date(d.weddingDate), p = n => String(n).padStart(2, "0");
  const fmt = x => `${x.getUTCFullYear()}${p(x.getUTCMonth() + 1)}${p(x.getUTCDate())}T${p(x.getUTCHours())}${p(x.getUTCMinutes())}00Z`;
  const ics = () => {
    const body = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Wedding//EN","BEGIN:VEVENT",`UID:${Date.now()}@wedding`,`DTSTAMP:${fmt(new Date())}`,
      `DTSTART:${fmt(dt)}`,`DTEND:${fmt(new Date(dt.getTime() + 6 * 3600e3))}`,`SUMMARY:Wedding of ${d.brideName} & ${d.groomName}`,
      `LOCATION:${d.venue}\\, ${d.address}`,"END:VEVENT","END:VCALENDAR"].join("\r\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([body], { type: "text/calendar" }));
    a.download = "wedding.ics"; a.click(); URL.revokeObjectURL(a.href);
  };
  return (
    <Reveal className="block dark venue">
      <p className="sans">Find us</p><h2>The Venue</h2><p className="lead">{d.venue}</p><p>{d.address}</p>
      <div className="btns">
        <button className="btn" onClick={() => window.open(d.mapsUrl, "_blank", "noopener")}>Open in Google Maps</button>
        <button className="btn gold" onClick={ics}>Add to Calendar</button>
      </div>
    </Reveal>
  );
}
