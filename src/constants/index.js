const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [];

const logoIconsList = [];

const abilities = [];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/Loblaw_Companies_Limited_logo_EN.svg",
    logoPath: "/images/Loblaw_Companies_Limited_logo.svg.png",
    title: "Data Engineer",
    date: "Sept 2024 - April 2025",
    responsibilities: [
      "Designed and deployed ETL pipelines using Python (pandas, SQLAlchemy) and GCP BigQuery, automating the ingestion and transformation of >500k retail sales records from multiple data sources.",
      "Engineered reusable data validation scripts and API connectors for Teradata systems, enhancing data reliability and pipeline efficiency by 85%.",
      "Developed backend microservices for internal analytics dashboards using Django REST Framework, integrated with PostgreSQL for secure, reliable analytics delivery.",
      "Implemented data models and schemas in PostgreSQL and MySQL, ensuring referential integrity and optimizing query performance with indexing and caching strategies.",
      "Collaborated with cross-functional teams to migrate legacy forecasting workflows to GCP Cloud Functions,reducing compute costs by 30%",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/techforsocialimpact_logo-removebg-preview.png",
    logoPath: "/images/techforsocialimpact_logo-removebg-preview.png",
    title: "Software Development Project Lead",
    date: "Feb 2024 - June 2024",
    responsibilities: [
      "Led two software squads under SAFe Agile methodology to design a cloud-based database management platform using GCP BigQuery, Azure App Services, and Django ORM for Project SHARE.",
      "Designed UML architecture diagrams for system modules (data ingestion, authentication, user dashboard) to standardize development across teams.",
      "Integrated RESTful APIs for cross-system data sync, secured via SSL/TLS encryption.",
      "Automated CI/CD pipelines using Jenkins and Github Actions, cutting deployment time by 40%.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/de6922_f9c67e490a9b4992a728ce3627c783a8_mv2-removebg-preview-removebg-preview.png",
    logoPath: "/images/promed_ai_logo-removebg-preview.png",
    title: "Full Stack Developer",
    date: "May 2023 - Sept 2023",
    responsibilities: [
      "Built RESTful backend services using FastAPI and MongoDB, supporting high-volume data operations (>100k).",
      "Developed front-end web interface with React and TypeScript, enabling real-time data visualization for analytics.",
      "Optimized backend query performance through indexing strategies and asynchronous I/O operations.",
      "Deployed production servers on GCP App Engine, monitoring uptime and scaling workloads automatically.",
      "Collaborated in a Git-based branching workflow (feature/release/hotfix) for version control and code review.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
