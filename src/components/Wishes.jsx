import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { supabase } from "../supabaseClient.js";

export default function Wishes() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.target));

    const { error: sbError } = await supabase.from("wishes").insert({
      name: data.name.trim(),
      message: data.message.trim(),
    });

    setLoading(false);

    if (sbError) {
      console.error("Wish error:", sbError);
      setError("Something went wrong. Please try again.");
      return;
    }

    setDone(true);
  };

  return (
    <Reveal className="block">
      <h2>Leave a Wish for the Couple</h2>
      {done ? (
        <p className="lead">Thank you for your beautiful wishes. ❤️</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Message
            <textarea name="message" rows="3" required />
          </label>
          {error && (
            <p style={{ color: "#b00020", fontSize: "0.9rem" }}>{error}</p>
          )}
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Wish"}
          </button>
        </form>
      )}
    </Reveal>
  );
}