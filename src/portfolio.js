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
  "A passionate Mobile Application Developer with 10+ years of experience building high-performance Android apps. Specializing in Kotlin, JAVA, Jetpack, and Firebase with deep expertise in building offline-first architectures, real-time data flows, and UI concurrency management."
  
  ),
  resumeLink:
    "https://drive.google.com/file/d/1s5oNCujoiRlqyqPGviBSYsLdm5j7zl6G/view?usp=sharing", // Set to empty to hide the button
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
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
 // subTitle: "PASSIONATE ANDROID DEVELOPER CRAFTING SMART, EDUCATIONAL MOBILE EXPERIENCES WITH AI & DATA",
skills: [
  emoji("📱 Build Android applications using both traditional XML layouts and modern Jetpack Compose for responsive, intuitive UIs"),
  emoji("🧠 Implement intelligent features with ML Kit — including real-time object detection, speech APIs, and Gemini APIs"),
  emoji("📦 Architect scalable app structures with Android Jetpack components like ViewModel, LiveData, Room, and Navigation in MVVM and Clean Architecture"),
  emoji("☁️ Integrate Firebase services (Auth, Realtime Database, Storage, Analytics) and REST APIs for seamless backend communication"),
  emoji("🤝 Collaborate effectively in cross-functional teams, contributing to product design, user testing, and agile development processes"),
  emoji("🌐 Provide technical support and guidance for cross-platform projects involving Flutter, React Native, and Swift to ensure smooth development and integration"),
  emoji("🔗 Translate business requirements from non-technical stakeholders into high-performance, user-friendly mobile applications"),
  emoji("📊 Utilize machine learning and data analytics using Python, TensorFlow Lite, and Big Data tools to extract insights"),
  emoji("📈 Leverage data visualization tools like Tableau and Power BI to communicate findings effectively"),
  emoji("🎮 Work with sensors and control logic to build interactive and gamified learning experiences"),
  emoji("🛠️ Follow best practices for testing (TDD, unit testing), performance optimization, accessibility, and CI/CD workflows")
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
  },
  {
  skillName: "JUnit",
  fontAwesomeClassname: "fas fa-vial"
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
      schoolName: "American International University",
      logo: require("./assets/images/aiub_logo.png"), // replace with AIUB logo image
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
      Stack: "Mobile Development (Android – Java/Kotlin)",
      progressPercentage: "90%"
    },
	 {
      Stack: "Technical Business Analysis & Requirements Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "AI & Machine Learning (Python, ML Kit, Big Data)",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Analytics & Visualization (Tableau, Power BI)",
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
      companylogo: require("./assets/images/ipvision.jpg"), // add your company logo in assets
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
      companylogo: require("./assets/images/ipvision.jpg"),
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
      companylogo: require("./assets/images/atomix.jpg"), // add logo here
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
      image: require("./assets/images/iLearn.png"), // add your iLearn logo here
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
      image: require("./assets/images/ringid.png"), // add ringID logo here
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
      image: require("./assets/images/ringid.jpg"), // add logo for Secure Chat app
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
      image: require("./assets/images/oii_logo.png"), // taxi app logo here
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
  title: emoji("Certifications & Key Skills 🏅"), // Changed title to be more specific
  subtitle:
    "Validated skills and professional recognition in Software Development, Data Analytics, and Business Analysis.",

  achievementsCards: [
    {
      title: "Data Analytics & BI Expertise",
      subtitle:
        "Practical experience in data analysis and business intelligence tools from industry leaders.",
      // You can choose an image that represents Data Analytics/BI,
      // or create a new one, or leave it general if this card is a summary.
      // For now, I'll use a placeholder.
      image: require("./assets/images/data_analysis_2.png"), // Placeholder: Replace with actual path
      imageAlt: "Data Analytics & Business Intelligence",
      footerLink: [
        {
          name: "Certificate on Data Analytics",
          // Replace with actual URL if you have one for this certificate
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Z6A6FRYLZWq4Kj8hJ_1750215054287_completion_certificate.pdf"
        },
        {
          name: "Power BI Essential Training",
          // Replace with actual URL if you have one for this certificate
          url: "https://www.linkedin.com/learning/certificates/ee422713a7711005fd826f42e4a23dc3cb8f45525f8d7a29ff25c31852294a2d?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhUujg7U9TeK31%2FagfSk%2F4g%3D%3D"
        }
      ]
    },
    {
      title: "Business Analysis & Project Management",
      subtitle:
        "Proficiency in understanding requirements and project dynamics for effective solution delivery.",
      // Placeholder image
      image: require("./assets/images/business_analysis_3.png"), // Placeholder: Replace with actual path
      imageAlt: "Business Analysis & Project Management",
      footerLink: [
        {
          name: "PMI: Business Analysis",
          // Replace with actual URL if you have one for this certificate
          url: "https://www.linkedin.com/learning/certificates/6d85fb8028ce39921519d507088dbd1983112b7afc4b339e84b59917eb85eaa4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bz9RSqQCySGODDaKqdiKwcA%3D%3D"
        }
      ]
    },
    {
      title: "Mobile & Core Development",
      subtitle:
        "Strong foundational and specialized skills in mobile application development and core programming.",
      // Placeholder image
      image: require("./assets/images/mobile_dev.png"), // Placeholder: Replace with actual path
      imageAlt: "Mobile & Core Development",
      footerLink: [
        {
          name: "Android (TestDome)",
          // Replace with actual URL if you have one for this certificate
          url: "https://www.testdome.com/certificates/d605ed39c7ba45a38a1b3ae451b3a04e"
        },
        {
          name: "Kotlin (TestDome)",
          // Replace with actual URL if you have one for this certificate
          url: "https://www.testdome.com/certificates/fb7fb30b5cea4a05a454753b70ab30f8"
        },
        {
          name: "JAVA (HackerRank)",
          // Replace with actual URL if you have one for this certificate
          url: "https://www.hackerrank.com/certificates/885b18ec8878"
        },
        {
          name: "Problem Solving (HackerRank)",
          // Replace with actual URL if you have one for this certificate
          url: "https://www.hackerrank.com/certificates/6401718f5639"
        }
      ]
    },
    {
      title: "Professional Affiliations",
      subtitle:
        "Membership in leading professional bodies for IT and Engineering in Australia.",
      // Placeholder image
      image: require("./assets/images/professional_membership.jpg"), // Placeholder: Replace with actual path
      imageAlt: "Professional Affiliations",
      footerLink: [
        {
          name: "ACS Membership",
          // Replace with actual URL if you have one for this membership
          url: "https://www.acs.org.au/"
        },
        {
          name: "Engineers Australia Membership",
          // Replace with actual URL if you have one for this membership
          url: "https://www.engineersaustralia.org.au/"
        }
      ]
    }
  ],
  display: true // Changed to true if you want to display it
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
    },
	 {
      url: "https://www.linkedin.com/pulse/unleashing-power-big-data-analytics-new-era-business-growth-munira-dp1ke",
      title: "Unleashing the Power of Big Data Analytics : A New Era of Business Intelligence and Growth",
      description:
        "In today's digital world, Big-Data-Analytics is no longer a fancy tech term, rather it’s a transformative force!It can transform nearly every industry by.."
    },
	 {
      url: "https://www.linkedin.com/pulse/securing-digital-frontier-navigating-landscape-software-munira-vcmhc",
      title: "Securing the Digital Frontier: Navigating the Landscape of Software Vulnerabilities and Testing Strategies",
      description:
        "Kevin Mitnick, a former hacker turned cybersecurity consultant and author, once remarked that in cybersecurity, the greatest danger lies not in what we know, but in what we don't.."
    },
	{
      url: "https://www.linkedin.com/pulse/role-data-science-artificial-intelligence-advancing-medicine-munira-chcec",
      title: "The Role of Data Science and Artificial Intelligence in Advancing Personalized Medicine",
      description:
        "What if your doctor could offer you the perfect treatment based not just on your symptoms, but on your genetic code, lifestyle and environment? With personalized.."
    },{
      url: "https://www.linkedin.com/pulse/mastering-statistical-analysis-hypothesis-testing-key-munira-n8qrc",
      title: "Mastering Statistical Analysis: Hypothesis Testing and Key Tests",
      description:
        "In data science and research, hypothesis testing is essential for evaluating whether data supports a certain claim. There are various types of statistical analysis.."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "MENTORSHIP",
  subtitle: emoji(
    "DEDICATED TO SUPPORTING STUDENTS THROUGH THE NSW STUDY CONNECT PROGRAM 🎓"
  ),

  talks: [
    {
      title: "Mentor at NSW Study Connect Program",
      subtitle: "Providing academic guidance and support to students to enhance their learning journey",
	  slides_url: "https://practera.com/practera-for-students-2/",
      event_url: "https://www.study.nsw.gov.au/current-students/nsw-jobs-connect/"
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
  display: false // Set true to display this section, defaults to false
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
