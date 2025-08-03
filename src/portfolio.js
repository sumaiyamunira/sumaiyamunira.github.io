/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sumaiya Salam Munira",
  title: "Hi all, I'm Sumaiya",
  subTitle: emoji(
  "A passionate Mobile Application Developer with 10+ years of experience building high-performance Android apps. Specializing in Kotlin, JAVA, Jetpack, and Firebase with deep expertise in building offline-first architectures, real-time data flows, and UI concurrency management"
  
  ),
  resumeLink:
    "https://www.canva.com/design/DAGqJhTm7JQ/yukv-XaQGjNfU4Z9fQbzHA/view?utm_content=DAGqJhTm7JQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7ecaea01ef", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sumaiyamunira",
  linkedin: "https://www.linkedin.com/in/sumaiya-munira/",
  gmail: "sumaiya.s.munira@gmail.com",
  gitlab: "https://gitlab.com/sumaiyamunira",
  facebook: "https://www.facebook.com/sumaiya.munira/",
  medium: "https://medium.com/@sumu0013",
 // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVELOPER BLENDING MOBILE INNOVATION WITH AI & DATA INSIGHTS",
  skills: [
    emoji("📱 Develop intuitive and interactive Android applications using Kotlin and Jetpack Compose"),
    emoji("🧠 Integrate AI and ML features using tools like ML Kit for real-time object detection and classification"),
    emoji("📊 Analyze large-scale data using Python, Big Data tools, and machine learning algorithms"),
    emoji("⚙️ Work with sensors and control algorithms to enhance interactive experiences in educational apps"),
    emoji("🎓 Build tech solutions that promote learning and speech development for children"),
    emoji("☁️ Use Firebase and REST APIs for backend integration and real-time data sync")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Kotlin",
    fontAwesomeClassname: "fas fa-mobile-alt" // Kotlin icon not available, using Android/mobile
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Android Studio",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Jetpack Compose",
    fontAwesomeClassname: "fas fa-layer-group"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Pandas / NumPy",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "Scikit-Learn",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "TensorFlow Lite / ML Kit",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "SQL / SQLite",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "REST APIs",
    fontAwesomeClassname: "fas fa-plug"
  }
 ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Show this section
  schools: [
    {
      schoolName: "University of Wollongong",
      logo: require("./assets/images/uow.png"), // replace with your UOW logo image
      subHeader: "Master of Computer Science (Machine Learning & Big Data)",
      duration: "2024",
      desc: "Graduated with Distinction and Leadership Award. Postgraduate Representative of SCIT.",
      descBullets: [
        "Specialized in Machine Learning and Big Data Analytics",
        "Led initiatives as Postgraduate Representative in School of IT"
      ]
    },
    {
      schoolName: "American International University - Bangladesh (AIUB)",
      logo: require("./assets/images/uow.png"), // replace with AIUB logo image
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2013",
      desc: "Graduated Magna Cum Laude with CGPA 3.94/4.00. Founding Member of AIUB Computer Club.",
      descBullets: [
        "Maintained high academic excellence throughout the degree",
        "Active leadership role as founding member of university’s Computer Club"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show Proficiency Section
  experience: [
    {
      Stack: "Mobile Development (Android/Kotlin)",
      progressPercentage: "85%"
    },
    {
      Stack: "AI & Machine Learning (Python, ML Kit, Big Data)",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Analytics & Visualization",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: true
};

// Work experience section

const workExperiences = {
  display: true, // Show work experience section
  experience: [
    {
      role: "Lead Android Engineer and Project Coordinator",
      company: "IPvision Canada Inc.",
      companylogo: require("./assets/images/uow.png"), // add your company logo in assets
      date: "September 2023 – June 2025 (Contract, Remote from Australia)",
      desc: "Led full-stack Android app development integrating Java SDK and Firebase. Coordinated cross-functional teams and provided mentorship.",
      descBullets: [
        "Designed and implemented scalable Android features enhancing user experience",
        "Conducted testing, debugging, and optimization for maintainable codebase",
        "Integrated analytics tools to monitor user behavior and inform design",
        "Managed development timelines and facilitated collaboration between teams",
        "Maintained legacy code for performance improvements and new features",
        "Mentored junior developers to ensure consistent code quality and growth"
      ]
    },
    {
      role: "Software Engineer (Promoted to Senior Software Engineer in 2017)",
      company: "IPvision Canada Inc.",
      companylogo: require("./assets/images/uow.png"),
      date: "August 2015 – March 2023 (Full-time, Onsite)",
      desc: "Contributed to large-scale Android app design and implementation, focusing on Material Design and performance for millions of users.",
      descBullets: [
        "Collaborated with designers and product teams to deliver feature-rich apps",
        "Applied Material Design principles to improve app usability and aesthetics",
        "Used Google Analytics and Firebase Crashlytics to reduce crash rates and enhance user retention",
        "Achieved 99% crash-free session rate across 5M+ installs of ringID app"
      ]
    },
    {
      role: "Android Developer",
      company: "Atomix System Ltd. (Excel Company Ltd.)",
      companylogo: require("./assets/images/uow.png"), // add logo here
      date: "February 2014 – July 2015 (Full-time, Onsite)",
      desc: "Developed pixel-perfect Android apps for Japanese clients with a focus on Material Design and UX consistency.",
      descBullets: [
        "Delivered high-quality UI/UX meeting stringent client design standards",
        "Collaborated closely with stakeholders and graphics teams for polished apps",
        "Implemented design for usability and accessibility to meet user expectations"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/uow.png"), // add your iLearn logo here
      projectName: "iLearn – Early Childhood Educational App",
      projectDesc: "Developed an engaging educational app using Android (Kotlin), ML Kit, Gemini APIs, and CameraX to support early childhood learning. Implemented object detection, speech APIs, and Jetpack components with MVVM and Hilt.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/posts/sumaiya-munira_ilearn-research-earlychildhoodeducation-activity-7255428488868855808-sts9?utm_source=share&utm_medium=member_desktop" // replace with actual URL or GitHub
        }
      ]
    },
    {
      image: require("./assets/images/uow.png"), // add ringID logo here
      projectName: "ringID – Social Business Platform",
      projectDesc: "Contributed to a large-scale social platform with 20M+ users, featuring marketplace, wallet, and live streaming. Used Java, Firebase, MVP architecture, and integrated analytics and Crashlytics.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.youtube.com/watch?v=MYioVE1Vf8w" // update if needed
        }
      ]
    },
    {
      image: require("./assets/images/uow.png"), // add logo for Secure Chat app
      projectName: "Secure Chat Application",
      projectDesc: "Built a privacy-first chat app in Kotlin with end-to-end encryption, secure calling, and real-time messaging via Firebase. Used Jetpack, Room DB, and tested with JUnit and Mockito.",
      footerLink: [
        {
          name: "Company Info",
          url: "https://www.ipvision.ca/" // optional
        }
      ]
    },
    {
      image: require("./assets/images/uow.png"), // taxi app logo here
      projectName: "Oii – Taxi Hiring App",
      projectDesc: "Created a ride-hailing app with real-time tracking via Google Maps SDK and Firebase Realtime DB. Used Kotlin and Clean Architecture for managing location, notifications, and booking flow.",
      footerLink: [
        {
          name: "Company Info",
          url: "https://excelcobd.com/"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
        "Passionate about creating cool tech and sharing what I’ve learned to inspire others.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/power-bi-vs-python-data-analytics-when-choose-what-munira-xzqzc/?trackingId=%2BGeLF7iCRQSzRZNOqff%2F%2BQ%3D%3D",
      title: "Power BI vs Python for Data Analytics - When to Choose What?",
      description:
        "As data professionals, choosing the right tool for the job is crucial. Today, let’s dive into Power BI and Python, two of the most powerful tools in data analytics, and discuss when to use each and how they complement each other. "
    },
    {
      url: "https://medium.com/@sumu0013/from-code-to-coordination-my-decade-long-journey-as-an-android-developer-ab5ffc5b4085",
      title: "From Code to Coordination: My Decade-Long Journey as an Android Developer",
      description:
        "I still remember the electric thrill of writing my first line of production code — a feeling so powerful, it made everything else fade into the background.."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sumaiya.s.munira@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
