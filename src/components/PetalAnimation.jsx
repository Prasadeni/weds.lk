import { useMemo } from "react";
export default function PetalAnimation({ count = 14 }) {
  const petals = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i, left: Math.random() * 100, size: 14 + Math.random() * 20, dur: 9 + Math.random() * 8,
    delay: -Math.random() * 12, sway: (Math.random() - 0.5) * 120, op: 0.4 + Math.random() * 0.5, rot: 180 + Math.random() * 400 })), [count]);
  return <div className="petals" aria-hidden="true">{petals.map(p => (
    <img key={p.id} src="/images/petal.svg" alt="" className="petal" style={{ left: `${p.left}%`, width: p.size, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, "--sway": `${p.sway}px`, "--op": p.op, "--rot": `${p.rot}deg` }} />))}</div>;
}
