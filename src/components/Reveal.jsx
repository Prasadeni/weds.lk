import { useEffect, useRef, useState } from "react";
export default function Reveal({ className = "", children }) {
  const ref = useRef(null); const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(ref.current); return () => io.disconnect();
  }, []);
  return <section ref={ref} className={`reveal ${on ? "in" : ""} ${className}`}>{children}</section>;
}
export const Lotus = ({ w = 90, className = "" }) => <img src="/images/lotus.svg" alt="" aria-hidden="true" width={w} className={className} />;
export const Divider = () => <div className="divider" aria-hidden="true"><i /><Lotus w={46} /><i /></div>;
