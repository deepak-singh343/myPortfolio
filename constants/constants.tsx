import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
export const navs = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
];

export const socials = [
  {
    link: "https://www.linkedin.com/in/deepak-singh-598504126/",
    icon: <FaLinkedinIn className="md:w-8 md:h-8 text-white" />,
  },
  {
    link: "https://github.com/deepak-singh343",
    icon: <FaGithub className="md:w-8 md:h-8 text-white" />,
  },
];

export const skillData = [
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "JavaScript", image: "/skills/js.png" },
  { name: "Tailwind CSS", image: "/skills/tailwind.png" },
  { name: "ReactJS", image: "/skills/react.png" },
  { name: "Redux", image: "/skills/redux.png" },
  { name: "TypeScript", image: "/skills/ts.png" },
  { name: "NextJS", image: "/skills/next.png" },
  { name: "NodeJS", image: "/skills/node-js.png" },
  { name: "Express", image: "/skills/express.png" },
  { name: "MongoDB", image: "/skills/mongodb.png" },
  { name: "Git", image: "/skills/git.png" },
];

export const projects = [
  {
    id: 1,
    title: "Old Jewellery AR",
    description:
      "Responsive Web application built using HTML, CSS, Javascript for trying jewellery on your face or hand or model image using AR technology. Allow users to take photo, save photo, share it. Also supports gender based model load, category based model load, stacking rings and necklaces and many more.",
    image: "/projects/old-webar.png",
    link: "https://webar.styledotme.com/",
    technology_used: "HTML,CSS,Javascript",
  },
  {
    id: 2,
    title: "New Jewellery AR",
    description:
      "An advanced web-based augmented reality (AR) application for trying on jewellery in real-time. This project enhances the previous version by utilizing a modern tech stack including React, Redux, TypeScript, and improved UI/UX. It offers a seamless and immersive experience for users to try different jewellery virtually. The application is fully responsive and supports multiple devices.",
    image: "/projects/webar.png",
    link: "https://www.tanishq.co.in/shop/jewellery?lang=en_IN&utm_source=Google&utm_medium=cpc&utm_campaign=HM_Performance_Search_Brand_AllIntent_Exact_Sep22+App%2BWeb+actions&&cm_mmc=Google-_-Jhumki-_-Search-_-Nov&gad_source=1&gclid=Cj0KCQiA_Yq-BhC9ARIsAA6fbAg5ml38sjZVLRxMN9FQMHAzpvTRSgYs6QzRQfK8Ya_EQc9bFW1mn1YaAvNKEALw_wcB",
  },

  {
    id: 3,
    title: "New Jewellery AR Dashboard",
    description:
      "Jewellery Dashboard web application built for operations team using HTML, CSS, Javascript, React, Redux to manage jewellery data (enable / disable, edit, delete, search ), upload inventory sheet, calibrate jewellery, check analytics, manage users, models, brands etc.",
    image: "/projects/jewellery-dashboard.png",
    link: "https://new-mirrar-dashboard-staging.netlify.app/",
    technology_used: "HTML,CSS,Javascript,TailwindCSS,React,Redux",
  },
  {
    id: 4,
    title: "Beauty Dashboard",
    description:
      "Beauty Dashboard web application built for operations team using HTML, CSS, Javascript, React, Redux to manage beauty products data (enable / diable, edit, delete, search), calibrate beauty products like change color, feature, finish, create looks, manage looks and other settings like change password, manage users, model images, background images etc.",
    image: "/projects/beauty-dashboard.png",
    link: "https://beauty-dashboard-staging.netlify.app/",
    technology_used: "HTML,CSS,Javascript,TailwindCSS,React,Redux",
  },
  {
    id: 5,
    title: "Looks and Makeup",
    description:
      "Responsive web application built using HTML, CSS, Javascript, React to try different types of makeups and prebuilt model looks on your face or model image using AR technology.Allows users to capture photo, save or share etc and also provides a slider to check before and after makeup.",
    image: "/projects/makeup-looks.png",
    link: "https://cdn.mirrar.com/beauty-instore/index.html?brand_id=bd13a22c-9651-48e3-afe6-b8572039c9ad&loginNotRequired=true",
    technology_used: "HTML,CSS,Javascript,TailwindCSS,React",
  },
  {
    id: 6,
    title: "3D Jewellery Customization Studio",
    description:
      "Responsive experimental project built using HTML, CSS, Javascript, React, Typescipt to customize 3D jewellery like rings, earrings, neckalces with different metal type, diamond color, ring type, and band type.Others features includes reset designs, zoom in/out, and share/save customized creations of 3d products.",
    image: "/projects/3d-studio.png",
    link: "https://customization-studio-mirrar.netlify.app/?brand_id=337695fe-f65b-4971-98e6-3e4c2449be78&isDebug=1&sku=EPT404FGNAA00",
    technology_used: "HTML,CSS,Javascript,TailwindCSS,React,TypeScript",
  },
];

export const experience = [
  {
    id: 1,
    title: "Styledotme Fashion And Lifestyle Private Limited",
    profile: "Frontend Developer SDE 2",
    duration: "Feb 2022 - Dec 2024",
    link: "https://www.linkedin.com/company/mirrar-technology/",
  },
  {
    id: 2,
    title: "CodersBrain Private Limited",
    profile: "Frontend Developer",
    duration: "Oct 2020 - Jan 2022",
    link: "https://www.linkedin.com/company/codersbrain/posts/?feedView=all",
  },
];
