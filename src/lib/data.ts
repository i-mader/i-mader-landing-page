// Importing images from the assets folder
import image1 from "../assets/image/Adobe_Corporate_logo 1.svg";
import image3 from "../assets/image/Dropbox_Logo 1.svg";
import image4 from "../assets/image/Duolingo_logo_(2019) 1.svg";
import image5 from "../assets/image/Grammarly_logo 1.svg";
import image6 from "../assets/image/logos_airbnb.svg";
import image2 from "../assets/image/logos_microsoft.svg";

// Importing images from the assets folder
import rahmat from "../assets/image/about/rahmat.png";
import egi from "../assets/image/about/egi.png";
import martin from "../assets/image/about/martin.png";
import daus from "../assets/image/about/daus.png";
import deby from "../assets/image/about/deby.png";
import ikiw from "../assets/image/about/ikiw.png";

export const ImgFounderrahmat = rahmat;
export const ImgFounderegi = egi;
export const ImgFoundermartin = martin;
export const ImgFounderdaus = daus;
export const ImgFounderdeby = deby;
export const ImgFounderikiw = ikiw;

// Importing images from the assets folder
import img1 from "../assets/project/img-1.jpg";
import img2 from "../assets/project/img-2.jpg";
import img3 from "../assets/project/img-3.jpg";
import img4 from "../assets/project/img-4.jpg";
import img5 from "../assets/project/img-5.jpg";
import img6 from "../assets/project/img-6.jpg";

// banner detail project
import bannerDetailProject from "../assets/project/banner-project.jpg";
export const ImageBannerProject = bannerDetailProject;

// banner detail project small
import bannerDetailProjectSmall from "../assets/project/banner-project-small.jpg";
export const ImageBannerProjectSmall = bannerDetailProjectSmall;

// banner detail project content
import bannerDetailProjectContent from "../assets/project/banner-content-project.jpg";
export const ImageBannerProjectContent = bannerDetailProjectContent;

export interface TrustedCompanyItem {
  id: number;
  image: any;
}
export interface ProjectItem {
  id: number;
  image: any;
  title: string;
  desc: string;
  url: string;
}

// Define the interface for each item in the data array
export interface ServiceItem {
  id: number;
  title: string;
  desc1: string;
  desc2: string;
  url: string;
}

// Define the interface for the dataService object
export interface DataService {
  title: string;
  data: ServiceItem[];
}

export const dataService = (t: (key: string) => string) => ({
  title: t('services_title'),
  data: [
    {
      id: 1,
      title: t('software_development_title'),
      desc1: t('software_development_sub_title'),
      desc2: t('faq_service_offer_answer'),
      url: "#",
    },
    {
      id: 2,
      title: t('devops_consultation_title'),
      desc1: t('devops_consultation_sub_title'),
      desc2: t('devops_consultation_desc'),
      url: "#",
    },
    {
      id: 3,
      title: t('software_consultant_title'),
      desc1: t('software_consultant_sub_title'),
      desc2: t('software_consultant_desc'),
      url: "#",
    },
  ],
});

export interface ClientDetail {
  id: number;
  value1: string;
  value2: string;
}

export interface Benefit {
  id: number;
  svg: string;
  title: string;
  desc: string;
}

export interface FeatureData {
  title: string;
  title1: string;
  desc: string;
  amountOfDetailClient: ClientDetail[];
  benefit: Benefit[];
}

export const featureData = (t: (key: string) => string) => ({
  title: t('features'),
  title1: t('features_desc'),
  desc: t('digital_innovation_desc'),
  amountOfDetailClient: [
    { id: 1, value1: "1.000+", value2: t('trusted_by_satisfied_clients_label') },
    { id: 2, value1: "150+", value2: t('trusted_by_partners_label') },
    { id: 3, value1: "300+", value2: t('trusted_by_projects_label') },
  ],
  benefit: [
    {
      id: 1,
      svg: "",
      title: t('efficiency'),
      desc: t('efficiency_desc'),
    },
    {
      id: 2,
      svg: "",
      title: t('saving_cost'),
      desc: t('saving_cost_desc'),
    },
    {
      id: 3,
      svg: "",
      title: t('competitiveness'),
      desc: t('competitiveness_desc'),
    },
    {
      id: 4,
      svg: "",
      title: t('peace_of_mind'),
      desc: t('peace_of_mind_desc'),
    },
  ],
});



export const dataSkills = (t: (key: string) => string) => ({
  title: t('skills_tools_technologies'),
  data: [
    {
      id: 1,
      img: "/images/skills2/js.svg",
      name: "Javascript",
    },
    {
      id: 2,
      img: "/images/skills2/ts.svg",
      name: "Typescript",
    },
    {
      id: 3,
      img: "/images/skills2/react.svg",
      name: "React",
    },
    {
      id: 4,
      img: "/images/skills2/next.svg",
      name: "Nextjs",
    },
    {
      id: 6,
      img: "/images/skills2/go.svg",
      name: "Golang",
    },
    {
      id: 7,
      img: "/images/skills2/node.svg",
      name: "Node.js",
    },
    {
      id: 8,
      img: "/images/skills2/express.svg",
      name: "Express.js",
    },
    {
      id: 9,
      img: "/images/skills2/nest.svg",
      name: "Nest.js",
    },
    {
      id: 10,
      img: "/images/skills2/socket.svg",
      name: "Socket.Io",
    },
    {
      id: 11,
      img: "/images/skills2/postgree.svg",
      name: "PostgreeSQL",
    },
    {
      id: 12,
      img: "/images/skills2/mongodb.svg",
      name: "MongoDB",
    },
    {
      id: 13,
      img: "/images/skills2/sass.svg",
      name: "Sass/Scss",
    },
    {
      id: 14,
      img: "/images/skills2/tailwind.svg",
      name: "Tailwind",
    },
    {
      id: 15,
      img: "/images/skills2/figma.svg",
      name: "Figma",
    },
    {
      id: 16,
      img: "/images/skills2/cy.svg",
      name: "Cypress",
    },
    {
      id: 17,
      img: "/images/skills2/storybook.svg",
      name: "Storybook",
    },
    {
      id: 18,
      img: "/images/skills2/git.svg",
      name: "Git",
    },
    {
      id: 19,
      img: "/images/skills2/sql.svg",
      name: "MySQL",
    },
  ],
});

export interface Mission {
  id: number;
  desc: string;
}

interface AboutUs {
  title: string;
  title2: string;
  desc: string;
  path: string;
  amountOfDetailClient: ClientDetail[];
}

interface OurMission {
  title: string;
  data: Mission[];
}

interface DataAboutUs {
  about_us: AboutUs;
  our_mission: OurMission;
}

export const aboutUsData = (t: (key: string) => string) => ({
  about_us: {
    title: t('about_us'),
    title2: t('features_desc'),
    desc: t('pioneer_description'),
    path: "/",
    amountOfDetailClient: [
      { id: 1, value1: "1.000+", value2: t('trusted_by_satisfied_clients_label') },
      { id: 2, value1: "150+", value2: t('trusted_by_partners_label') },
      { id: 3, value1: "300+", value2: t('trusted_by_projects_label') },
    ],
  },
  our_mission: {
    title: t('missions'),
    data: [
      {
        id: 1,
        desc: t('mission_1'),
      },
      {
        id: 2,
        desc: t('mission_2'),
      },
      {
        id: 3,
        desc: t('mission_3'),
      },
      {
        id: 4,
        desc: t('mission_4'),
      },
      {
        id: 5,
        desc: t('mission_5'),
      },
    ],
  },
});


export const dataFaq = (t: (key: string) => string) => ({
  title: t('faqs_title'),
  desc: t('faqs_description'),
  data: [
    {
      id: 1,
      title: t('faq_service_offer_question'),
      desc: t('faq_service_offer_answer'),
    },
    {
      id: 2,
      title: t('faq_it_consulting_benefit_question'),
      desc: t('faq_it_consulting_benefit_answer'),
    },
    {
      id: 3,
      title: t('faq_why_choose_us_question'),
      desc: t('faq_why_choose_us_answer'),
    },
    {
      id: 4,
      title: t('faq_pricing_options_question'),
      desc: t('faq_pricing_options_answer'),
    },
    {
      id: 5,
      title: t('faq_ongoing_support_question'),
      desc: t('faq_ongoing_support_answer'),
    },
    {
      id: 6,
      title: t('faq_contact_support_team_question'),
      desc: t('faq_contact_support_team_answer'),
    },
  ],
});


export const contactUs = (t: (key: string) => string) => ({
  title: t('contact_us_title'),
  title2: t('contact_us_heading'),
  desc: t('contact_us_description'),
});

export const dataFoolter = (t: (key: string) => string) => ({
  brand: {
    title: t('footer_brand_title'),
    desc: t('footer_brand_desc'),
  },
  listMenu: {
    title: t('footer_list_menu_title'),
    list: [
      {
        id: 1,
        name: t('footer_list_menu_services'),
        path: "/services",
      },
      {
        id: 2,
        name: t('footer_list_menu_projects'),
        path: "/projects",
      },
      {
        id: 3,
        name: t('footer_list_menu_about_us'),
        path: "/about-us",
      },
      {
        id: 4,
        name: t('footer_list_menu_contact_us'),
        path: "/contact-us",
      },
    ],
  },
  companyInfo: {
    title: t('footer_company_info_title'),
    email: "business@i-mader.tech", // This might be static, adjust if needed
    phone: "+6281272914023", // This might be static, adjust if needed
    address: t('footer_company_info_address'),
  },
});

export const dataCompany: TrustedCompanyItem[] = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
  {
    id: 6,
    image: image6,
  },
];

export const dataProject: ProjectItem[] = [
  {
    id: 1,
    image: img1,
    title: "Food Order Delivery App",
    desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    url: "/",
  },
  {
    id: 2,
    image: img2,
    title: "New York Billboard 2024",
    desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    url: "/",
  },
  {
    id: 3,
    image: img3,
    title: "Analytics Hybird App",
    desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    url: "/",
  },
  {
    id: 4,
    image: img4,
    title: "Web Modular System",
    desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    url: "/",
  },
  {
    id: 5,
    image: img5,
    title: "New Technology of ChatGPT",
    desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    url: "/",
  },
  {
    id: 6,
    image: img6,
    title: "The Vintage of Digital Art",
    desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    url: "/",
  },
];

interface HighlightProjectItem {
  id: number;
  title: string;
  desc: string;
  img: any;
}

export const dataHighlightProject: HighlightProjectItem[] = [
  {
    id: 1,
    title:
      "The best way to optimize the use of the new innovation from ChatGPT",
    desc: "In this fast-paced digital era, artificial intelligence (AI) technology continues to develop rapidly, bringing new innovations that change the way we work and communicate.",
    img: ImageBannerProject,
  },
  {
    id: 2,
    title:
      "2 The best way to optimize the use of the new innovation from ChatGPT",
    desc: "2 In this fast-paced digital era, artificial intelligence (AI) technology continues to develop rapidly, bringing new innovations that change the way we work and communicate.",
    img: img4,
  },
  {
    id: 3,
    title:
      "3 The best way to optimize the use of the new innovation from ChatGPT",
    desc: "3 In this fast-paced digital era, artificial intelligence (AI) technology continues to develop rapidly, bringing new innovations that change the way we work and communicate.",
    img: img6,
  },
];
