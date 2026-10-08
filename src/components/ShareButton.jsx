export default function ShareButton({ url }) {
  const go = () => window.open(`https://wa.me/?text=${encodeURIComponent(`You’re warmly invited to celebrate our wedding ❤️\n${url}`)}`, "_blank", "noopener");
  return <button className="btn gold" onClick={go}>Share Invitation</button>;
}
