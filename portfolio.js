import emoji from "react-easy-emoji";

export const greetings = {
	name: "Rachael Tay",
	title: "Hi all, I'm Rachael Tay",
	description:
		"A passionate Frontend Developer with an interest in User Experience and Machine Learning",
	// resumeLink: "https://github.com/rachaeltay/rachaeltay.github.iohttps://cv.hanzla.",
};

export const openSource = {
	githubUserName: "rachaeltay",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/rachaeltay",
	linkedin: "https://www.linkedin.com/in/rachael-tay-/",
	medium: "https://medium.com/@rachaeltea"
};

export const skillsSection = {
	title: "Skill Set",
	subTitle:
		"",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) and SPA Stacks"
		),
		emoji(
			"⚡ Cloud technology using AWS Lambda, DynamoDB and API Gateway"
		),
	],

	softwareSkills: [
		{
			skillName: "HTML5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		// {
		// 	skillName: "SASS",
		// 	fontAwesomeClassname: "logos:sass",
		// },
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		// {
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
			fontAwesomeClassname: "vscode-icons:file-type-angular",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "SQL",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		// {
		// 	skillName: "mongoDB",
		// 	fontAwesomeClassname: "vscode-icons:file-type-mongo",
		// },
		{
			skillName: "AWS",
			fontAwesomeClassname: "logos:aws",
		},
		// {
		// 	skillName: "firebase",
		// 	fontAwesomeClassname: "logos:firebase",
		// },
		{
			skillName: "Python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "Docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "Django",
			fontAwesomeClassname: "logos:django-icon",
		},
		{
			skillName: "Flask",
			fontAwesomeClassname: "logos:flask",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design",
		progressPercentage: "90",
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "National University of Singapore",
		subHeader: "Graduated from the School of Computing",
		duration: "August 2016 - May 2020",
		desc: "Bachelor of Science, Business Analytics",
		descBullets: [
			"Core Team Member of NUS Hackers Club and NUS Student Computing Club",
			"Volunteered as an ambassador for Innovfest Unbound 2017"
		],
	},
	{
		schoolName: "Technical University of Munich",
		subHeader: "Student Exchange Programme",
		duration: "April 2019 - September 2019",
		desc: "Informatics",
		descBullets: [
			"Undertook interdisciplinary courses in Social Media Network Analysis, Blockchain & Distributed Ledger Technologies, IT & Society, and Psychology",
		],
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "US2.AI",
		companylogo: "/img/icons/common/us2_icon.png",
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
		companylogo: "/img/icons/common/grab_icon.png",
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
		companylogo: "/img/icons/common/mha_icon.png",
		date: "May 2018 - Nov 2018",
		desc: "",
		descBullets: [
			"Developed and greatly improved backend infrastructure for automated web-mining using Flask, BS4 and Selenium",
			"Improved web page performance by converting existing monolithic architecture to microservice architecture through the use of AWS' tools and Docker",
			"Built new features internal site in PHP, jQuery and AJAX",
		],
	},
];

export const projects = [
	{
		name: "Route Ranger",
		desc: "Created real-time data visualisations using R and R Shiny to allow users to make informed decisions on travel plans",
		github: "https://github.com/rachaeltay/Route-Ranger",
	},
	{
		name: "Emotion Recognition",
		desc: "Built an Emotion Recognition application with Python, OpenCV and Scikit Learn to allow the disabled to send emoji without typing",
	},
	{
		name: "LSTM Stock Prediction",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/rachaeltay/LSTM-Stocks-Prediction",
	},
];

export const feedbacks = [
	{
		name: "name1",
		feedback:
			"feedback1",
	},
	{
		name: "name2",
		feedback:
			"feedback2",
	},
];
