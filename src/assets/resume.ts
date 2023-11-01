type Education = {
    school: string;
    location: string;
    date: string;
    description: string;
};
type Work = {
    title: string;
    company: string;
    date: string;
    description: string[];
};
type TechnicalSkill = {
    name: string;
    items: string[];
};

type Data = {
    education: Education;
    work: Work[];
    technicalSkills: TechnicalSkill[];
};

const data: Data = {
    education: {
        school: "Monterrey Institute of Technology and Higher Education",
        location: "Guadalajara, MX",
        description: "bachelor of Science in Computer Science, 95/100 GPA",
        date: "Aug 2019 - Jun 2023",
    },
    work: [
        {
            title: "Software Engineer",
            company: "Brightcove",
            date: "Dec 2022 - Dec 2023",
            description: [
                "Developed and maintained high-quality web applications for cloud streaming services using ReactJS with Typescript",
                "Collaborated with cross-functional teams to define, design, and ship new features",
                "Built and maintained reusable components of an internal design system",
                "Designed, developed, and managed highly scalable services using Node.js and Express.js",
            ],
        },
        {
            title: "Software Engineer Intern",
            company: "Wizeline",
            date: "Jul 2022 - Dec 2022",
            description: [
                "Reduced company's interview assignation process duration to minutes instead of hours by automatizing manual steps of the process, integrating the app with Wizeline's datalake (BigQuery), and external APIs (Zoom, Google Calendar, etc)",
                "Developed web application for managing and monitoring interview assignation process using Vue.js",
                "Worked on developing serverless services using AWS Lambda and Python (Chalice)",
                "Took part on design of the architecture of the app",
            ]
        },
        {
            title: "Production Engineer Intern",
            company: "Meta (via MLH)",
            date: "Jun 2022 - Aug 2022",
            description: [
                "Completed 12-weeks of structured curriculum-based learning covering core Production Engineering topics, supplemented with events / workshops hosted by industry experts",
                "Created an open-source portfolio website template using Python, Flask, Jinja, MySQL, Docker, Nginx and unittest",
                "Automated testing and deployment workflows using CI/CD",
                "Set up system and container monitoring, alerting, and visualization using Prometheus and Grafana",
            ],
        },
        {
            title: "Software Engineer",
            company: "Blue People",
            date: "Apr 2022 - Jul 2022",
            description: [
                "Developed Full-Stack applications that met client's requirements on a microservice architecture using React, Node.js and AWS technologies",
                "Took part on requirement analysis and specifications alongside clients",
                "Maintained long term support for clients on deployed cloud applications, offering support and monitoring",
            ],
        },
        {
            title: "Software Engineer",
            company: "Centrident",
            date: "Oct 2020 - Sept 2021",
            description: [
                "Developed a REST API using Django and MySQL to store and manage client data",
                "Developed a full-stack Web landing page using Node.JS and React",
                "Developed a system's administration Web App using Go and MySQL for management and scheduling of clients",
            ],
        },
    ],
    technicalSkills: [
        {
            name: "Languages",
            items: [
                "Typescript",
                "Javascript",
                "Python",
                "Go",
                "C++",
                "HTML",
                "CSS",
                "SQL",
            ],
        },
        {
            name: "Frameworks",
            items: [
                "React",
                "Svelte",
                "Vue",
                "React Native",
                "Express.js",
                "Flask",
                "Django",
                "Gin",
                "MUI"
            ],
        },
        {
            name: "Developer Tools",
            items: ["Git", "Docker", "Firebase", "AWS"],
        },
        {
            name: "Libraries",
            items: [
                "Pandas",
                "Numpy",
                "Matplotlib",
                "Tensorflow",
                "Keras",
                "OpenCV",
                "AgentPy",
            ],
        },
        {
            name: "Spoken Languages",
            items: ["English (C1)", "Spanish (native)", "French (B1)"],
        },
        {
            name: "DevOps",
            items: ["Containerization", "CI/CD", "Linux Systems", "Bash scripting"],
        },
    ],
};

export default data;
