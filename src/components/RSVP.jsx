import { useState } from "react";
import Reveal, { Lotus } from "./Reveal.jsx";
import { supabase } from "../supabaseClient.js";

async function submitRSVP(data) {
  const { error } = await supabase.from("rsvps").insert({
    name: data.name.trim(),
    guests: parseInt(data.guests, 10) || 1,
    attend: data.attend,
    message: data.message?.trim() || null,
  });
  if (error) {
    console.error("RSVP error:", error);
    throw error;
  }
  return true;
}

const Stem = ({ side }) => (
  <div className={`stem ${side}`} aria-hidden="true">
    <img src="/images/lotus.svg" alt="" style={{ top: "4%", left: "-30%", width: "110%" }} />
    <img src="/images/lotus.svg" alt="" style={{ top: "36%", left: "-18%", width: "100%" }} />
    <img src="/images/lotus.svg" alt="" style={{ top: "68%", left: "-34%", width: "96%" }} />
    <img src="/images/leaf.svg" alt="" style={{ top: "90%", left: "30%", width: "70%" }} />
  </div>
);

export default function RSVP({ d }) {
  const [attend, setAttend] = useState("accept");
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const g = d.giftInfo;

  const go = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await submitRSVP({
        ...Object.fromEntries(new FormData(e.target)),
        attend,
      });
      setDone(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copy = () =>
    navigator.clipboard?.writeText(g.number).then(() => setCopied(true));

  return (
    <Reveal className="block rsvp">
      <Stem side="l" />
      <Stem side="r" />
      <div className="rsvp-in">
        <h2>Be With Us</h2>
        {done ? (
          <p className="lead">Thank you for confirming your attendance. ❤️</p>
        ) : (
          <form onSubmit={go}>
            <label>
              Your name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Number of guests
              <input name="guests" type="number" min="1" max="10" defaultValue="1" />
            </label>
            <fieldset>
              <legend>Will you attend?</legend>
              <label className="radio">
                <input
                  type="radio"
                  name="attend"
                  value="accept"
                  checked={attend === "accept"}
                  onChange={() => setAttend("accept")}
                />{" "}
                Joyfully Accept
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="attend"
                  value="decline"
                  checked={attend === "decline"}
                  onChange={() => setAttend("decline")}
                />{" "}
                Regretfully Decline
              </label>
            </fieldset>
            <label>
              Message (optional)
              <textarea name="message" rows="3" />
            </label>
            {error && (
              <p style={{ color: "#b00020", fontSize: "0.9rem" }}>{error}</p>
            )}
            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send with love"}
            </button>
          </form>
        )}
        {d.showGift && (
          <div className="gift">
            <Lotus w={46} />
            <h3>Your presence is our greatest gift</h3>
            {/*
            <p className="muted">Should you wish to bless us with a gift:</p>
            <p>
              {g.bank}
              <br />
              {g.name}
              <br />
              <b>{g.number}</b>
            </p>
            <button className="btn ghost" onClick={copy}>
              {copied ? "Copied ✓" : "Copy account number"}
            </button>
            */}
          </div>
        )}
      </div>
    </Reveal>
  );
}