import Reveal, { Divider } from "./Reveal.jsx";

export default function LoveStory({ d }) {
  // Build the full list of photos (same logic as Gallery.jsx)
  const allPhotos =
    Array.isArray(d?.gallery) && d.gallery.length > 0
      ? d.gallery
      : d?.galleryCount > 0
      ? Array.from(
          { length: d.galleryCount },
          (_, i) =>
            `/images/${d.galleryPrefix || "gallery"}${i + 1}${d.galleryExt || ".jpg"}`
        )
      : [];

  // Use the first two photos for the "duo", with safe fallbacks
  const photo1 = allPhotos[0] || "/images/my-couple.jpg";
  const photo2 = allPhotos[1] || allPhotos[0] || "/images/my-couple.jpg";

  return (
    <Reveal className="block">
      <h2>Our Story</h2>
      <Divider />
      <p className="quote">“{d.story}”</p>
      <div className="duo">
        <img loading="lazy" src={photo1} alt="The couple together" />
        <img loading="lazy" src={photo2} alt="The couple smiling" />
      </div>
    </Reveal>
  );
}