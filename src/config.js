// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#6699cc, #4d85ea, #6495ed, #7ba5f0, #7be0f0, #004080, #8c7bf0",
  firstName: "Rachael",
  middleName: "",
  lastName: "Tay",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rachaeltay",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@rachaeltea",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rachaeltay/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in directory and use require("") to import here,
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume
//     i.e resume: require("../resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("./assets/img/profilepic.png"),
  imageSize: 375,
  message:
    "My name is Rachael Tay. I am currently a software engineer at a fast-paced meditech startup where my main responsibilities are building UI in Angular and Django, and creating microservice architecture using AWS Lambda, API Gateway and DynamoDB. I enjoy designing and building intuitive user experiences, and learning about new technologies. In my spare time, I love to build custom mechanical keyboards and keycaps.",
  resume: "https://docs.google.com/document/d/1iR0-uFpGYWv77o8DAVJy6Didr0Mk01vdUK6h_7p8Xuw/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "rachaeltay",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("./assets/img/profilepic.png"), 
      label: "First", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("./assets/img/profilepic.png"), 
      label: "Second", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  frontend: [
    { name: "HTML5", color: "#ff6500", icon: "fab fa-html5" },
    { name: "CSS3", color: "#0080ff", icon: "fab fa-css3-alt" },
    { name: "Javascript", color: "#ffc107", icon: "fab fa-js" },
    { name: "Typescript", color: "#0080ff", icon: "fas fa-code" },
    { name: "Angular", color: "#cc0000", icon: "fab fa-angular" },
    { name: "React", color: "#0080ff", icon: "fab fa-react" },
  ],
  backend: [
    { name: "npm", color: "#ff6500", icon: "fab fa-npm" },
    { name: "SQL", color: "#0080ff", icon: "fas fa-database" },
    { name: "Python", color: "#ffc107", icon: "fab fa-python" },
    { name: "AWS", color: "#ff6500", icon: "fab fa-aws" },
    { name: "Docker", color: "#0080ff", icon: "fab fa-docker" },
    { name: "Flask", color: "#ffc107", icon: "fas fa-flask" },
    { name: "Git", color: "#ff6500", icon: "fab fa-github" },
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm open to full-time frontend developer opportunities! If you know of any positions available, or if you just want to say hi, please feel free to email me at",
  email: "rtay989@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Software Engineer",
      company: "US2.AI",
      companylogo: require("./assets/img/us2_icon.png"),
      date: "September 2020 – Present",
      descBullets: [
        "Implemented new features in Angular for the customer-facing web app",
        "Developed cloud solutions in Django and AWS to improve the speed of processing and accuracy of classification",
        "Built a REST API using AWS Lambda, API Gateway and Flask",
        "Worked within an agile team and helped prioritise feature requests worked on",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "Grab",
      companylogo: require("./assets/img/grab_icon.png"),
      date: "Dec 2018 - Feb 2019",
      desc: "",
      descBullets: [
        "Analysed and presented customer food preferences based on analysis of search terms in S.E.A.",
        "Created a Customer Clustering tool based on unsupervised clickstream data in Python and D3.js to understand eater behaviour",
        "Collaborated across Food, Customer Experience and Analytics Architecture teams to deliver cross-functional projects",
      ],
    },
    {
      role: "Data Engineer Intern",
      company: "Ministry of Home Affairs",
      companylogo: require("./assets/img/mha_icon.png"),
      date: "May 2018 - Nov 2018",
      desc: "",
      descBullets: [
        "Developed and greatly improved backend infrastructure for automated web-mining using Flask, BS4 and Selenium",
        "Improved web page performance by converting existing monolithic architecture to microservice architecture through the use of AWS' tools and Docker",
        "Built new features internal site in PHP, jQuery and AJAX",
      ],
    },
  ]
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
