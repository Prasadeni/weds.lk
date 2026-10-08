import { useState } from "react";
import d from "./weddingData.js";
import EnvelopeIntro from "./components/EnvelopeIntro.jsx";
import PetalAnimation from "./components/PetalAnimation.jsx";
import Hero from "./components/Hero.jsx";
import WeddingDate from "./components/WeddingDate.jsx";
import Ceremony from "./components/Ceremony.jsx";
import Location from "./components/Location.jsx";
import Timeline from "./components/Timeline.jsx";
import LoveStory from "./components/LoveStory.jsx";
import SpecialEvents from "./components/SpecialEvents.jsx";
import Gallery from "./components/Gallery.jsx";
import RSVP from "./components/RSVP.jsx";
import Wishes from "./components/Wishes.jsx";
import ThankYou from "./components/ThankYou.jsx";
import MusicButton from "./components/MusicButton.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {!isOpened && <EnvelopeIntro d={d} onDone={() => setIsOpened(true)} />}
      {isOpened && <><PetalAnimation /><MusicButton src={d.musicSrc} /></>}
  
        <main className="page" aria-hidden={!isOpened}>
        <Hero d={d} />
        <WeddingDate d={d} />
        <Ceremony d={d} />
        <Location d={d} />
        
        {d.showTimeline && <Timeline d={d} />}
        {d.showLoveStory && <LoveStory d={d} />}
        {d.showSpecialEvents && <SpecialEvents d={d} />}
        {d.showGallery && <Gallery d={d} />}
        
        <RSVP d={d} />
        
        {d.showWishes && <Wishes />}
        
        <ThankYou d={d} />
        <Footer d={d} />
      
      </main>
    </>
  );
}
