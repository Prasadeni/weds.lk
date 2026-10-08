import { useRef, useState } from "react";
export default function MusicButton({ src }) {
  const a = useRef(null); const [on, setOn] = useState(false);
  const toggle = () => { if (on) { a.current.pause(); setOn(false); } else a.current.play().then(() => setOn(true)).catch(() => setOn(false)); };
  return <><audio ref={a} src={src} loop preload="none" /><button className="music" onClick={toggle} aria-label={on ? "Pause music" : "Play music"}>{on ? "❚❚" : "♪"}</button></>;
}
