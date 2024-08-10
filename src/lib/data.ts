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

export const dataService: DataService = {
  title: "We Provide The Best Service For Your Needs",
  data: [
    {
      id: 1,
      title: "Software Development",
      desc1: "Web & mobile app development, Back-end operation.",
      desc2:
        "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
      url: "#",
    },
    {
      id: 2,
      title: "DevOps Consultation",
      desc1: "Data center security, Technology optimization, Software tools",
      desc2:
        "An approach that combines software development (Dev) and information technology operations (Ops) in a harmonious whole to drive better collaboration",
      url: "#",
    },
    {
      id: 3,
      title: "Software Consultant",
      desc1: "System maintenance, Security consultant, Best ITFramework",
      desc2:
        "A linchpin in the technological sector, deftly navigating the confluence of business acumen and IT expertise. Within our professional gambit.",
      url: "#",
    },
  ],
};

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

export const featureData: FeatureData = {
  title: "FEATURES",
  title1: "We Serve Different From The Others",
  desc: "To be the Digital Innovation Mader For Your Business. We are committed to delivering exceptional digital solutions that are tailored to meet your unique business needs",
  amountOfDetailClient: [
    { id: 1, value1: "1.000+", value2: "Our satisfied clients" },
    { id: 2, value1: "150+", value2: "Companies partner" },
    { id: 3, value1: "300+", value2: "Project well done" },
  ],
  benefit: [
    {
      id: 1,
      svg: "",
      title: "Efficiency",
      desc: "Software services refer to the ability of a system or application to perform tasks more quickly, using fewer resources, or by minimizing the time and human effort",
    },
    {
      id: 2,
      svg: "",
      title: "Saving Cost",
      desc: "Can often provide significant cost savings for companies. This can happen through process automation reducing labor costs, reduction in physical infrastructure costs",
    },
    {
      id: 3,
      svg: "",
      title: "Competitiveness",
      desc: "Success in utilizing digital technology can increase a company's competitiveness. This includes the ability to bring products or services more quickly to market",
    },
    {
      id: 4,
      svg: "",
      title: "Peace of Mind",
      desc: "You can focus on their core business activities without worrying about technical or operational issues of their IT systems. Using reliable and efficient software",
    },
  ],
};

export const dataSkills = {
  title: "The Skills, Tools And Technologies We Are Really Good At:",
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
};

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

export const aboutUsData: DataAboutUs = {
  about_us: {
    title: "ABOUT US",
    title2: "Become A Pioneer In Digitalizing The World ",
    desc: "Welcome to Innovation Mader, your premier partner in digital innovation. Our mission is to empower businesses to thrive in the digital age through cutting-edge technology and innovative solutions.",
    path: "/",
    amountOfDetailClient: [
      { id: 1, value1: "1.000+", value2: "Our satisfied clients" },
      { id: 2, value1: "150+", value2: "Companies partner" },
      { id: 3, value1: "300+", value2: "Project well done" },
    ],
  },
  our_mission: {
    title: "OUR MISSIONS",
    data: [
      {
        id: 1,
        desc: "Increase efficiency and productivity through advanced digital solutions and easy to use",
      },
      {
        id: 2,
        desc: "Develop technology products and services that can make things easier digitalization process in various sectors.",
      },
      {
        id: 3,
        desc: "Encourage collaboration and innovation to create relevant technology and beneficial to society",
      },
      {
        id: 4,
        desc: "Provide support and education to help clients adapt with digital transformation.",
      },
      {
        id: 5,
        desc: "Committed to sustainability and social responsibility in everything the digitalization steps we are taking",
      },
    ],
  },
};

export const dataFaq = {
  title: "FAQs",
  desc: "Services detail, pricing information, and more to help you make an informed decision",
  data: [
    {
      id: 1,
      title: "What service do you offer?",
      desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    },
    {
      id: 2,
      title: "How can your IT consulting services benefit my business?",
      desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    },
    {
      id: 3,
      title: "Why should I choosen you?",
      desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    },
    {
      id: 4,
      title: "What are you pricing options?",
      desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    },
    {
      id: 5,
      title: "Do you prove ongoing support after project complete?",
      desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    },
    {
      id: 6,
      title: "How can I contact your support team for further assistance?",
      desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    },
  ],
};

export const contactUs = {
  title: "CONTACT US",
  title2: "Already Interested In Working With Us?",
  desc: "Optimize costs and efficiency with our software solutions. Contact us now for a free consultation! Only start working together once you see we can be trusted",
};

export const dataFoolter = {
  brand: {
    title: "iMader",
    desc: "Welcome to Innovation Mader, your premier partner in digital innovation. Our mission is to empower businesses to thrive in the digital age through cutting-edge technology and innovative solutions. As a leading provider of digital services, we specialize in transforming your business ideas into reality, leveraging the latest advancements in technology to drive growth and success.",
  },
  listMenu: {
    title: "List Menu",
    list: [
      {
        id: 1,
        name: "Our Services",
        path: "/services",
      },
      {
        id: 2,
        name: "Project Portfolio",
        path: "/projects",
      },
      {
        id: 3,
        name: "About Us",
        path: "/about-us",
      },
      {
        id: 4,
        name: "Contact Us",
        path: "/contact-us",
      },
    ],
  },
  companyInfo: {
    title: "Company Info",
    email: "business@i-mader.tech",
    phone: "+6281272914023",
    address: "DKI Jakarta, Indonesia",
  },
};

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
