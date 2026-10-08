import Reveal, { Divider } from "./Reveal.jsx";

export default function LoveStory({ d }) {
  return (
    <Reveal className="block">
      <h2>Our Story</h2>
      <Divider />
      <p className="quote">“{d.story}”</p>
      <div className="duo">
        <img loading="lazy" src={d.storyPhotos?.[0] || d.gallery[0]} alt="The couple together" />
        <img loading="lazy" src={d.storyPhotos?.[1] || d.gallery[1]} alt="The couple smiling" />
      </div>
    </Reveal>
  );
}