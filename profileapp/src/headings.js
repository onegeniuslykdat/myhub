import { GetSectionById } from "./sections";

let headingsList = [
  {
    id: 1,
    name: "About_Me",
    sectionid: 1,
    lead: "Software Solutions Developer",
    desc: "",
    projects: [],
  },
  {
    id: 2,
    name: "Profile_Statement",
    sectionid: 1,
    lead: "",
    desc: "Dedicated Software Solutions Developer using JavaScript, C# and the ASP.NET/.NETCORE framework to develop web applications that solve problems and automate organizational processes.",
    projects: [],
  }, //I am seeking to apply myself to solve more challenging IT related problems that would improve organizational efficiency and shape the world.
  {
    id: 3,
    name: "University - Postgraduate Degree",
    sectionid: 2,
    lead: "James Cook University, Brisbane, Australia",
    desc: "2024: MSc. - Information Technology (Computing)",
    projects: [],
  },
  {
    id: 4,
    name: "University - First Degree",
    sectionid: 2,
    lead: "University of Lagos, Nigeria",
    desc: "2016: BSc. Hons - Systems Engineering",
    projects: [],
  },
  {
    id: 5,
    name: "Secondary_School",
    sectionid: 2,
    lead: "Nigerian Tulip Int'l College, Ogun, Nigeria",
    desc: "2010: SSCE",
    projects: [],
  },
  // {
  //   id: 6,
  //   name: "Primary_School",
  //   sectionid: 2,
  //   lead: "Nazareth Nur/Pry School, Festac",
  //   desc: "2004: First School Leaving Certificate",
  //   projects: [],
  // },
  {
    id: 7,
    name: "Access_Bank",
    sectionid: 3,
    lead: "2021-2022: Backend Engineer at Digital Factory, Access Bank PLC",
    desc: "Javascript, C#, .NetCore, .Net framework, Entity, SQL, Oracle, Azure DevOps, Serilog, Seq",
    projects: [
      "Design and development of the backend for Contact Center Complaints Management. This reduced the number of calls that agents at the Contact Center receive, there by automating the management of customer complaints via the web",
      "Design and development of the APIs for Instant Account Opening on the web. This made it possible for the bank to acquire and verify new customers via the web. Its first day of launch at an NYSC camp saw over 200 new accounts created",
      "Development of features and optimization of the bulk card processing through efficient logging using Serilog and Seq of Access Card Management System. Staff were able to handle bulk ATM card requests (over 3000 daily) much faster than before.",
    ],
  },
  {
    id: 8,
    name: "Sophia_ERP",
    sectionid: 3,
    lead: "2020-2021: Software Engineer at Sophia ERP Ltd",
    desc: "C#, VB, ASP.Net framework, SQL, HTML, CSS, JavaScript",
    projects: [
      "Design and Development of the Delta marketplace web application",
      "Design and development of the Montgomery web portal, as well as data migration from their existing system for Montgomery Security Vaults",
      "Design and Development of features, as well as integration of PayPal into the Coder Series website, to enable registration of students for courses and club membership",
    ],
  },
  {
    id: 9,
    name: "NTIC",
    sectionid: 3,
    lead: "2019-2020: Web Developer",
    desc: "HTML, CSS, Javascript, VB, MS-Access",
    projects: [
      "Summer camp E-Timetable: Web page with automatic zoom link generation that enables participants of a virtual summer camp have access to the programs at the appropriate time",
      "E-Voting desktop application",
    ],
  },
  // {
  //   id: 10,
  //   name: "NYSC",
  //   sectionid: 3,
  //   lead: "Software Solutions Developer",
  //   desc: "",
  // },
  // {
  //   id: 11,
  //   name: "Links",
  //   sectionid: 4,
  //   lead: "",
  //   desc: "",
  // },
  {
    id: 12,
    name: "My_Email",
    sectionid: 4,
    lead: "Email",
    desc: "anthony.udo.onyekwere@outlook.com",
    projects: [],
  },
];

export let GetAllHeadings = () => {
  return headingsList;
};

export let GetAllHeadingsBySectionId = (sectionId) => {
  return GetAllHeadings().filter((h) => h.sectionid === sectionId);
};
