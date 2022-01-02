"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(860);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(644);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/SEO.jsx






function SEO({
  data
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "author",
      content: "Rachael Tay"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: data.keywords.join(", ")
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "canonical",
      href: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:url",
      content: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: data.image
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:site_name",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:url",
      content: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:image",
      content: data.image
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "robots",
      content: "Index"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "manifest",
      href: "/manifest.json"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "./favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "./favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "./favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      async: true,
      src: "https://code.iconify.design/1/1.0.4/iconify.min.js"
    })]
  });
}

SEO.prototype = {
  data: external_prop_types_default().shape({
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string,
    image: (external_prop_types_default()).string,
    url: (external_prop_types_default()).string,
    keywords: external_prop_types_default().arrayOf((external_prop_types_default()).string)
  }).isRequired
};
/* harmony default export */ const components_SEO = (SEO);
;// CONCATENATED MODULE: ./pages/index.js


const Navigation = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 271).then(__webpack_require__.bind(__webpack_require__, 271)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(271)],
    modules: ["index.js -> " + "../components/Navigation"]
  }
});
const Greetings = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(794), __webpack_require__.e(185)]).then(__webpack_require__.bind(__webpack_require__, 185)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(185)],
    modules: ["index.js -> " + "../containers/Greetings"]
  }
});
const Skills = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 688).then(__webpack_require__.bind(__webpack_require__, 688)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(688)],
    modules: ["index.js -> " + "../containers/Skills"]
  }
});
const Proficiency = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 716).then(__webpack_require__.bind(__webpack_require__, 716)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(716)],
    modules: ["index.js -> " + "../containers/Proficiency"]
  }
});
const Education = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 758).then(__webpack_require__.bind(__webpack_require__, 758)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(758)],
    modules: ["index.js -> " + "../containers/Education"]
  }
});
const Experience = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(675), __webpack_require__.e(974)]).then(__webpack_require__.bind(__webpack_require__, 974)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(974)],
    modules: ["index.js -> " + "../containers/Experience"]
  }
});
const Projects = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 829).then(__webpack_require__.bind(__webpack_require__, 829)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(829)],
    modules: ["index.js -> " + "../containers/Projects"]
  }
});
const Feedbacks = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 519).then(__webpack_require__.bind(__webpack_require__, 519)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(519)],
    modules: ["index.js -> " + "../containers/Feedbacks"]
  }
});
const GithubProfileCard = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(675), __webpack_require__.e(794), __webpack_require__.e(551)]).then(__webpack_require__.bind(__webpack_require__, 551)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(551)],
    modules: ["index.js -> " + "../components/GithubProfileCard"]
  }
});




function Home({
  githubProfileData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_SEO, {
      data: {
        title: "Rachael Tay",
        description: "A passionate Frontend Developer and API Developer.",
        image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
        url: "https://github.com/rachaeltay/rachaeltay.github.io",
        keywords: ["Rachael", "Rachael Tay", "@rachaeltay", "Portfolio", "Rachael Portfolio", "Rachael Tay Portfolio", "web developer", "full stack", "full stack web developer", "django", "flask", "django rest framework", "angularjs", "angular", "expressjs", "reactjs", "contextapi", "python"]
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Greetings, {}), /*#__PURE__*/jsx_runtime_.jsx(Skills, {}), /*#__PURE__*/jsx_runtime_.jsx(Proficiency, {}), /*#__PURE__*/jsx_runtime_.jsx(Education, {}), /*#__PURE__*/jsx_runtime_.jsx(Experience, {}), /*#__PURE__*/jsx_runtime_.jsx(Projects, {}), /*#__PURE__*/jsx_runtime_.jsx(GithubProfileCard, {
      prof: githubProfileData
    })]
  });
}
Home.prototype = {
  githubProfileData: (external_prop_types_default()).object.isRequired
};
async function getStaticProps(_) {
  const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then(res => res.json());
  return {
    props: {
      githubProfileData
    }
  };
}

/***/ }),

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.js

const greetings = {
  name: "Rachael Tay",
  title: "Hi all, I'm Rachael Tay",
  description: "A passionate Frontend Developer with an interest in User Experience and Machine Learning" // resumeLink: "https://github.com/rachaeltay/rachaeltay.github.iohttps://cv.hanzla.",

};
const openSource = {
  githubUserName: "rachaeltay"
};
const contact = {};
const socialLinks = {
  github: "https://github.com/rachaeltay",
  linkedin: "https://www.linkedin.com/in/rachael-tay-/",
  medium: "https://medium.com/@rachaeltea"
};
const skillsSection = {
  title: "Skill Set",
  subTitle: "",
  skills: [external_react_easy_emoji_default()("⚡ Develop highly interactive Front end / User Interfaces for your web applications"), external_react_easy_emoji_default()("⚡ Progressive Web Applications ( PWA ) and SPA Stacks"), external_react_easy_emoji_default()("⚡ Cloud technology using AWS Lambda, DynamoDB and API Gateway")],
  softwareSkills: [{
    skillName: "HTML5",
    fontAwesomeClassname: "vscode-icons:file-type-html"
  }, {
    skillName: "CSS3",
    fontAwesomeClassname: "vscode-icons:file-type-css"
  }, // {
  // 	skillName: "SASS",
  // 	fontAwesomeClassname: "logos:sass",
  // },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "logos:javascript"
  }, {
    skillName: "TypeScript",
    fontAwesomeClassname: "logos:typescript-icon"
  }, // {
  // 	skillName: "reactjs",
  // 	fontAwesomeClassname: "vscode-icons:file-type-reactjs",
  // },
  // {
  // 	skillName: "nodejs",
  // 	fontAwesomeClassname: "logos:nodejs-icon",
  // },
  // {
  // 	skillName: "flutter",
  // 	fontAwesomeClassname: "logos:flutter",
  // },
  // {
  // 	skillName: "swift",
  // 	fontAwesomeClassname: "vscode-icons:file-type-swift",
  // },
  {
    skillName: "Angular",
    fontAwesomeClassname: "vscode-icons:file-type-angular"
  }, {
    skillName: "npm",
    fontAwesomeClassname: "vscode-icons:file-type-npm"
  }, {
    skillName: "SQL",
    fontAwesomeClassname: "vscode-icons:file-type-sql"
  }, // {
  // 	skillName: "mongoDB",
  // 	fontAwesomeClassname: "vscode-icons:file-type-mongo",
  // },
  {
    skillName: "AWS",
    fontAwesomeClassname: "logos:aws"
  }, // {
  // 	skillName: "firebase",
  // 	fontAwesomeClassname: "logos:firebase",
  // },
  {
    skillName: "Python",
    fontAwesomeClassname: "logos:python"
  }, {
    skillName: "Git",
    fontAwesomeClassname: "logos:git-icon"
  }, {
    skillName: "Docker",
    fontAwesomeClassname: "logos:docker-icon"
  }, {
    skillName: "Django",
    fontAwesomeClassname: "logos:django-icon"
  }, {
    skillName: "Flask",
    fontAwesomeClassname: "logos:flask"
  }]
};
const SkillBars = [{
  Stack: "Frontend/Design",
  progressPercentage: "90"
}, {
  Stack: "Backend",
  progressPercentage: "70"
}, {
  Stack: "Programming",
  progressPercentage: "70"
}];
const educationInfo = [{
  schoolName: "National University of Singapore",
  subHeader: "Graduated from the School of Computing",
  duration: "August 2016 - May 2020",
  desc: "Bachelor of Science, Business Analytics",
  descBullets: ["Core Team Member of NUS Hackers Club and NUS Student Computing Club", "Volunteered as an ambassador for Innovfest Unbound 2017"]
}, {
  schoolName: "Technical University of Munich",
  subHeader: "Student Exchange Programme",
  duration: "April 2019 - September 2019",
  desc: "Informatics",
  descBullets: ["Undertook interdisciplinary courses in Social Media Network Analysis, Blockchain & Distributed Ledger Technologies, IT & Society, and Psychology"]
}];
const experience = [{
  role: "Software Engineer",
  company: "US2.AI",
  companylogo: "/img/icons/common/us2_icon.png",
  date: "September 2020 – Present",
  descBullets: ["Implemented new features in Angular for the customer-facing web app", "Developed cloud solutions in Django and AWS to improve the speed of processing and accuracy of classification", "Built a REST API using AWS Lambda, API Gateway and Flask", "Worked within an agile team and helped prioritise feature requests worked on"]
}, {
  role: "Data Scientist Intern",
  company: "Grab",
  companylogo: "/img/icons/common/grab_icon.png",
  date: "Dec 2018 - Feb 2019",
  desc: "",
  descBullets: ["Analysed and presented customer food preferences based on analysis of search terms in S.E.A.", "Created a Customer Clustering tool based on unsupervised clickstream data in Python and D3.js to understand eater behaviour", "Collaborated across Food, Customer Experience and Analytics Architecture teams to deliver cross-functional projects"]
}, {
  role: "Data Engineer Intern",
  company: "Ministry of Home Affairs",
  companylogo: "/img/icons/common/mha_icon.png",
  date: "May 2018 - Nov 2018",
  desc: "",
  descBullets: ["Developed and greatly improved backend infrastructure for automated web-mining using Flask, BS4 and Selenium", "Improved web page performance by converting existing monolithic architecture to microservice architecture through the use of AWS' tools and Docker", "Built new features internal site in PHP, jQuery and AJAX"]
}];
const projects = [{
  name: "Route Ranger",
  desc: "Created real-time data visualisations using R and R Shiny to allow users to make informed decisions on travel plans",
  github: "https://github.com/rachaeltay/Route-Ranger"
}, {
  name: "Emotion Recognition",
  desc: "Built an Emotion Recognition application with Python, OpenCV and Scikit Learn to allow the disabled to send emoji without typing"
}, {
  name: "LSTM Stock Prediction",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  github: "https://github.com/rachaeltay/LSTM-Stocks-Prediction"
}];
const feedbacks = [{
  name: "name1",
  feedback: "feedback1"
}, {
  name: "name2",
  feedback: "feedback2"
}];

/***/ }),

/***/ 548:
/***/ ((module) => {

module.exports = require("color-thief-react");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 102:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 356:
/***/ ((module) => {

module.exports = require("react-reveal");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 99:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(152)));
module.exports = __webpack_exports__;

})();