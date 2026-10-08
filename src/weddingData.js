// Edit everything customer-specific here.
const weddingData = {
  brideName: "Sachini",
  groomName: "Nadun",
  couplePhoto:"/images/my-couple.jpg",
  weddingDate: "2026-10-25T09:00:00",
  venue: "Grand Wedding Hall",
  address: "Colombo, Sri Lanka",
  poruwaTime: "11:00 AM",
  mapsUrl: "https://maps.app.goo.gl/dPaBrvgex79aVutk8",
  invitationUrl: typeof window !== "undefined" ? window.location.href : "",
  musicSrc: "/music/wedding.mp3",
  story: "From the moment our paths crossed, our journey has been filled with love, laughter and beautiful memories. Now we begin a new chapter together.",
  timeline: [["09:00 AM","Wedding Ceremony"],["10:00 AM","Photography"],["11:00 AM","Poruwa Ceremony"],["12:30 PM","Reception"],["01:30 PM","Lunch & Celebration"]],
  events: [
    { title: "Engagement", date: "5 December 2026", time: "4:00 PM", venue: "Family Home, Kandy", text: "An intimate exchange of rings with our closest family." },
    { title: "Homecoming", date: "13 December 2026", time: "6:00 PM", venue: "Groom's Residence", text: "Welcoming the bride into her new home." },
  ],
  gallery: [1,2,3,4,5,6].map(n => `/images/photo${n}.jpg`),
 
  showGift: true,

    // Feature flags - true to show, false to hide
  showGallery: true,
  showLoveStory: true,
  showSpecialEvents: true,
  showTimeline: true,
  showWishes: true,

  giftInfo: { bank: "Your Bank", name: "Account Holder", number: "000 000 000" },
  thankPhoto: "/images/thank-you.jpg",
  thankText: "As we begin this new chapter, we feel so blessed to have people like you beside us. Thank you for your love, kindness and warm wishes. Your presence on our wedding day will be a precious gift and will make our celebration complete.",
};
export default weddingData;
