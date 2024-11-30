import hero_bg from "./herobg.png";
import hero_circle from "./hero_circle.png";
import hero_shape from "./hero_shape.png";
import video_img from "./video-img.png";
import right_stats from "./right-stats.png";
import salvador from "./salvador.png";
import sun from "./sun.png";
import infinity from "./infinity.png";
import page_bg from "./page_bg.png";
import AboutUsBannerImg from "./about_us.png";
import { FaBookOpen, FaLightbulb, FaTv } from "react-icons/fa";
import { FaKitMedical, FaPersonDress } from "react-icons/fa6";

export const image = {
  hero_bg,
  hero_circle,
  hero_shape,
  video_img,
  right_stats,
  salvador,
  sun,
  infinity,
  page_bg,
  AboutUsBannerImg,
};

export const offers = [
  {
    image: "/assets/creator.png",
    heading: "The creator dashboard",
    text: "There are many new variations of pasages of available text.",
  },

  {
    image: "/assets/backer_vector.png",
    heading: "The backer report",
    text: "There are many new variations of passages as we as text.",
  },

  {
    image: "/assets/analytics_vector.png",
    heading: "Google analytics",
    text: "There are many new variations of passages as we as text.",
  },

  {
    image: "/assets/project_vector.png",
    heading: "Set a deadline project",
    text: "There are many new variations of passages as we as text.",
  },

  {
    image: "/assets/stretch_vector.png",
    heading: "Stretch goals project",
    text: "There are many new variations of passages as we as text.",
  },
];

export const blogData = [
  {
    image: "/assets/video-img.png",
    blogger: "admin",
    comments: 3,
    topic: "A day in the life of entrepreneur & co-founders",
  },
  {
    image: "/assets/video-img.png",
    blogger: "admin",
    comments: 0,
    topic: "Future where technology create good jobs",
  },
  {
    image: "/assets/video-img.png",
    blogger: "admin",
    comments: 1,
    topic: "What you do today can improve your tomorrows",
  },
];

export const projects = [
  {
    name: "Self Driving Robot for Target Shooting Game",
    image: "https://imagizer.imageshack.com/v2/320x319q90/923/A9sIOn.png",
    category: "Technology",
    goal: 25000,
    endDate: "2024-11-29",
    raised: 4500,
    backgroundImage:
      "https://imagizer.imageshack.com/v2/320x319q90/923/A9sIOn.png",
  },
  {
    name: "British Wildlife Illustrated Gift Wrap",
    image: "https://imagizer.imageshack.com/v2/371x319q90/923/X7XssG.png",
    category: "Videos",
    goal: 15000,
    endDate: "2024-11-30",
    raised: 3600,
    backgroundImage:
      "https://imagizer.imageshack.com/v2/371x319q90/923/X7XssG.png",
  },
  {
    name: "Mirror One | Your life at a glance",
    image: "https://imagizer.imageshack.com/v2/371x319q90/924/kMCUtv.png",
    category: "Education",
    goal: 18000,
    endDate: "2026-10-30",
    raised: 2540,
    backgroundImage:
      "https://imagizer.imageshack.com/v2/371x319q90/924/kMCUtv.png",
  },
  {
    name: "VR Ears | Hear Off-World Listen Off-Ear",
    image: "https://imagizer.imageshack.com/v2/321x319q90/922/LybLCu.png",
    category: "Technology",
    goal: 30000,
    endDate: "2025-10-30",
    raised: 4000,
    backgroundImage:
      "https://imagizer.imageshack.com/v2/321x319q90/922/LybLCu.png",
  },
  {
    name: "Notebook for your creative observation",
    image: "https://imagizer.imageshack.com/v2/370x318q90/922/DhQ8gd.png",
    category: "Medical",
    goal: 20000,
    endDate: "2030-10-30",
    raised: 4134,
    backgroundImage:
      "https://imagizer.imageshack.com/v2/370x318q90/922/DhQ8gd.png",
  },
  {
    name: "Beautiful color for designers & students",
    image: "https://imagizer.imageshack.com/v2/371x318q90/922/k4DPIX.png",
    category: "Fashion",
    goal: 12000,
    endDate: "2025-10-30",
    raised: 2097,
    backgroundImage:
      "https://imagizer.imageshack.com/v2/371x318q90/922/k4DPIX.png",
  },
];

export const testimonialData = [
  {
    name: "Okeke Chinedu",
    testament: "Never to list us on tier one exchanges.  from A to Z.",
    image: "/assets/video-img.png",
  },
  {
    name: "Okeke Chinaza",
    testament:
      "Never thought to list us on tier one exchanges. It gutilities from A to Z.”",
    image: "/assets/video-img.png",
  },
  {
    name: "Okeke Ebuka",
    testament:
      "“Never thouger one exchanges. It gave us funds to develop our utilities from A to Z.”",
    image: "/assets/video-img.png",
  },
  {
    name: "Okeke Emerie",
    testament:
      "“Never thought w one exchanges. It gave us funds to develop our utilities from A to Z.”",
    image: "/assets/video-img.png",
  },
];

export const categoryButton = [
  {
    id: "1",
    name: "Technology",
    image: <FaLightbulb />,
  },
  {
    id: "2",
    name: "Videos",
    image: <FaTv />,
  },
  {
    id: "3",
    name: "Education",
    image: <FaBookOpen />,
  },
  {
    id: "4",
    name: "Medical",
    image: <FaKitMedical />,
  },
  {
    id: "5",
    name: "Fashion",
    image: <FaPersonDress />,
  },
];
