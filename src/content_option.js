const logotext = 'MH';
const meta = {
  title: 'Marshall Hageman',
  description: 'I’m Marshall Hageman Software Engineer _ Full stack developer',
};

const introdata = {
  title: 'I’m Marshall Hageman',
  animated: {
    first: 'I love coding',
    second: 'I code cool websites',
    third: 'I script and automate data pipelines',
    fourth: 'I develop embedded apps',
    fifth: 'I solve tough problems',
  },
  description:
    "I'm a software engineer with 5 years of experience building applications, scripts, data pipelines, and more. I love developing with strong OOP and C++ fundamentals.",
  your_img_url: '/images/gundam.jpg',
};

const dataabout = {
  title: 'A bit about myself',
  aboutme:
    "Hello, I'm an experienced Full Stack Developer who is accustomed to ramping up fast on teams and adjusting to any tech stack. I've been working at Northrop Grumman for the last 4 years, and I've had the opportunity to work on Windows apps, embedded apps, web apps, and much more in that time.",
};
const worktimeline = [
  {
    jobtitle: 'Embedded Software Engineer',
    where: 'Northrop Grumman',
    date: '2020 - Present',
  },
  {
    jobtitle: 'Software Engineering Intern',
    where: 'General Dynamics',
    date: '2019 - 2020',
  },
  {
    jobtitle: 'Computer Aide',
    where: 'Department of Defense',
    date: '2016 - 2017',
  },
];

const skills = [
  {
    name: 'Python',
    value: 95,
  },
  {
    name: 'C++',
    value: 90,
  },
  {
    name: 'Javascript',
    value: 80,
  },
  {
    name: 'React',
    value: 70,
  },
  {
    name: 'Next JS',
    value: 85,
  },
];

const services = [
  {
    title: 'Web Apps',
    description:
      "I've always been passionate about creating web apps since my first internship where I built a hardware tracking app at General Dynamics. Since then, I placed 3rd at my colleges Hackathon; building a web application for generating meal plans intuitively for low income families. I've built many RESTful websites including a Covid tracking websites, business and personal profile websites, and my personal favorite: a pickleball paddle comparison website (I like pickleball).",
  },
  {
    title: 'Embedded Software',
    description:
      'From my time on the Virtual Hardware team, I got to work on the modeling and simulation of various hardware systems and fpgas on real time aircraft platforms, then as an embedded developer for Infrared Counter Measures and then Targeting team, I gained experience by adding lower level features and critical bug fixes to production C and C++ code as part of the Operational Flight Program.',
  },
  {
    title: 'Data and Automation',
    description:
      "I've done extensive work to automate and fix automation processes on many teams. This includes setting up Jenkins Pipeline's, bash scripting, python scripting, robot framework libs, automated graphing of pipelines in Tableau and matplotlib/Pandas, and data collection to MongoDB",
  },
];

const dataportfolio = [
  {
    img: 'images/proj-ng-cypi.jpg',
    description: 'Northrop Grumman Cyber Competition utilizing Raspberry Pi',
    link: 'https://github.com/marshy9/Cyber-Raspberry-Pi-NG-Competition/tree/main',
  },
  {
    img: 'images/proj-ir-license.jpg',
    description:
      'A research paper I published for a graduate level Wireless Systems class. This project included coding, data collection, research, and many hours of testing and writing.',
    link: 'https://github.com/marshy9/Infrared-Boat-License-Detection',
  },
  {
    img: 'images/linux-module.jpg',
    description: 'Built a linux module, running tic-tac-toe in kernel space.',
    link: 'https://github.com/marshy9/linux-kernel-module-tictactoe',
  },
  {
    img: 'images/proj-paddle.jpg',
    description:
      'I love playing pickleball, so I built an ecomerce-ish app for comparing pickleball paddles in NextJS',
    link: 'https://github.com/marshy9/Paddle-Comparison-App',
  },
  {
    img: 'images/proj-covid.jpg',
    description:
      'I made a COVID-19 data visualizer that allows the user to view COVID-19 data in a meaningful way',
    link: 'https://github.com/marshy9/Covid-Visualizer-Website',
  },
  {
    img: 'images/proj-8086.jpg',
    description:
      'I got to do some 8086 microprocessor board design, layout, and programming.',
    link: 'https://github.com/marshy9/8086-Micro-Processor-Board-Project',
  },
];

const contactConfig = {
  YOUR_EMAIL: 'marshallhageman@gmail.com',
  YOUR_FONE: '(410) 980-0850',
  description:
    "Please reach out to discuss how my skills and experience can contribute to your team's success. Don't forget to leave your contact info.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: 'service_sfzi2xo',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
};

const socialprofils = {
  github: 'https://github.com/marshy9',
  facebook: 'https://facebook.com',
  linkedin: 'https://www.linkedin.com/in/marshall-hageman-9631441b8/',
  twitter: 'https://twitter.com',
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
