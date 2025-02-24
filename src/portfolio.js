/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋 I am",
  title_name: "Ch Swati",
  title2: "Ch Swati",
  logo_name: "swati_ch",
  full_name: "",
  subTitle:
    "a pre-final year B.Tech student at IIIT Naya Raipur, pursuing Data Science and Artificial Intelligence. A lifelong learner with a curious mind, I am a Data Science enthusiast passionate about development, machine learning and problem-solving.",
  resumeLink:
    "https://drive.google.com/file/d/1kRldZeysEPapG-gRCns9mAXfqCSthdwN/view?usp=drive_link",
  mail: "mailto:im.swati322003@gmail.com",
};
// I am A BTech PreFinalYear Student in Data Science and AI , I am Pashionate about development,Machine Learning,Deep Learning,Problem solving.And I am a Life long learner

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/swati323ch",
  linkedin: "https://www.linkedin.com/in/ch-swati",
  gmail: "swati322003@gmail.com",
};

const skills = {
  data: [
    {
      title: "My Skills involve",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop efficient Backend and interactive User Interfaces for web applications",
        "⚡ Building responsive website front end using HTML, CSS, ReactJS",
        "⚡ Familiar with managing databases like MySQL, MongoDB, and Firebase",
        "⚡ Also have experience in designing tools like Figma and Adobe Illustrator",
      ],
      softwareSkills: [
        /*{
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },*/

        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },

        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },

        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },

        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF9A00",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "International Institute of Information Technology Naya Raipur",
      subtitle:
        "Bachelor of Technology in Data Science and Artificial Intelligence",
      logo_path: "IIITNR education logo.png",
      alt_name: "SSEC",
      duration: "2022 - 2026",
      descriptions: [
        "⚡  I'm a prefinal year student in Data Science and Artificial Intelligence.",
        "⚡ I have studied core subjects like Data Structures ,Deep Learning ,DBMS ,Networking ,Operating Systems ,Distributed Systems ,Cryptography ,Blockchain ,ML , etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡Current CGPA of 9.03",
      ],
      website_link: "https://www.iiitnr.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "BOB",
      subtitle: "All Rounder Award",
      logo_path: "bob logo.ico",
      //certificate_link:
      //"",
      alt_name: "6Th Sem",
      // color_code: "#f36c3d",
      color_code: "rgb(255, 202, 133)", //#a60000
    },
    {
      title: "Hackathon",
      subtitle: "Microsoft CWB Hackathon",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ped1j53t_7k9JTwN0GVv7n6_PLD-EnXr/view",
      alt_name: "Data Analysis",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    {
      title: "Training",
      subtitle: "Java Development",
      logo_path: "wipro_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1akuQyBThmafJVnXUxJDJ5pbxu-QGF2xR/view",
      alt_name: "hackathon",
      color_code: "#C5E2EE", //"rgb(251, 225, 189)",
    },
    {
      title: "Hackathon",
      subtitle: " Myntra HackerRamp",
      logo_path: "myntra_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1v9vmXnzmZpj7invihxA7zzcF7TeuFvgz/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: " #f47e2c", //#2AAFED
    },
    {
      title: "GSSOC",
      subtitle: "Girls Script Summer of code",
      logo_path: "girlscriptsoc_logo.ico",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "Opensource Event",
      color_code: " #fefd7b",
    },

    {
      title: "Training",
      subtitle: "Web Development",
      logo_path: "shecodes_logo.ico",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },

    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },

    {
      title: "AIML",
      subtitle: "ML Challenge",
      logo_path: "aiml_transparent.png",
      // certificate_link:
      //"https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
      alt_name: "Reply",
      color_code: "#0C9D5899",
    },
    {
      title: "Research Paper",
      subtitle: "IEEE Conference",
      logo_path: "iee logo3.png",
      certificate_link: "https://ieeexplore.ieee.org/document/10502959",
      alt_name: "Opensource Event",
      color_code: "rgb(254, 208, 123)",
    },
    // color_code: "#8C151599", //#C5E2EE //#2AAFED
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Position of Responsiblity and Volunteership",
  description:
    "I Served as a DSA Instructor, mentoring junior students to build a strong foundation in DSA concepts. Successfully executed projects as both an individual contributor and a team member. Additionally, held the position of Head of Science and Technology, leading and managing multiple technical clubs at the institute to foster innovation and technical growth.",
  //I am working as a full time software developer with an experience of about 1 year and have done 5+ internships during my tenure in college. I've done projects both as a solo developer and in a team. I like contributing to opensource projects in my free time.
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experience",
      experiences: [
        {
          title: "Undergraduate DSA Instructor",
          company: "IIIT Naya Raipur",
          company_url: "https://graphi-x-dsa.vercel.app/",
          logo_path: "IIITNR logo.png",
          duration: "Jul 2024 - Jan 2025",
          location: "On-Site",
          description:
            "Facilitated students' understanding of key Data Structures and Algorithms concepts, including stacks, queues, linked lists, trees, and graphs. Also developed an interactive tool to enhance the learning experience, simplifying complex algorithms for better comprehension. Through these initiatives, I contributed to the academic growth of over 150 students, significantly improving their performance.",
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#4abe3a",
        },
        {
          title: "Mentee",
          company: "Codess Cafe",
          company_url: "https://tekion.com/",
          logo_path: "codess cafe logo.png",
          duration: "Dec 2024 - Present",
          location: "Mentorship",
          description: `As a mentee at Codess Cafe, I acquired significant experience in the technology sector, developing my technical expertise and gaining insight into various industry practices. The mentorship program allowed me to engage with real-world challenges, fostering both professional and personal growth. Moreover, it provided valuable networking opportunities, enabling me to establish connections with industry professionals and deepen my understanding of emerging trends and technological innovations.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#ff6352",
        },
      ],
    },
    {
      title: "Position of Responsiblities",
      experiences: [
        {
          title: "UG Science and Technology Secretary",
          company: "IIIT Naya Raipur",
          company_url: "https://tekion.com/",
          logo_path: "sac_logo.png",
          duration: " August 2023 - August 2024",
          location: "",
          description: `Led and managed multiple technical clubs, including Coding (TSOC), AI/ML, Cybersecurity, Electronics, and the Quiz Club.I played a key role in organizing hackathons, contests, workshops, and educational sessions, contributing to knowledge sharing within the institute .`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#00bfa5",
        },
        {
          title: "Student Cordinator GDG Raiput Devfest ",
          company: "Google Developers Group",
          company_url: "https://www.reczee.com/",
          logo_path: "gdg logo.jpg",
          duration: "Dec 2023",
          location: "",
          description: `Coordinated and organized technical events and workshops at DevFest, engaging over 1,000 developers and enhancing their skills in emerging technologies. Led a team of student volunteers to ensure seamless execution, fostering a collaborative environment for learning and innovation. Facilitated the dissemination of advanced knowledge, promoting technical growth and community building within the developer ecosystem.`,
          // Implemented OAuth2.0 flow for Microsoft Graph API to seamlessly integrate Outlook Calendar events with the application. Strategically targeted approximately 20% of the user base by integrating the Outlook Graph API, enhancing user experience. Enabled the scheduling of online interview meetings by checking user's available slots, streamlining the interview process.  "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title:
            "Head Cordinator for National Level Science Exebition- SCINTfIC'24",
          company: "IIIT Naya Raipur",
          company_url: "https://www.samsung.com/",
          logo_path: "scintfic logo.jpg",
          duration: "Oct 2023 - Dec 2024",
          location: "",
          description: `Led a team in organizing a national-level science exhibition, bringing together 400+ school students from across India to showcase their skills and nurture their talents.`,
          //Conducted in-depth research on real-time video processing techniques, exploring multiple approaches to enhance efficiency. Designed and implemented workflow architectures to seamlessly integrate models into real-time mobile applications, improving overall performance. Demonstrated strong problem-solving skills by optimizing solutions for real-time video processing challenges.
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#ea8c2f",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Volunteer",
          company: "National Service Scheme",
          company_url: "https://nss.gov.in/",
          logo_path: "NSS.jfif",
          duration: "Jan 2023 - Jan 2024",
          location: "IIIT Naya Raipur",
          description:
            "Take time out over weekends to teach as a teaching volunteer and also actively participated in NSS events.",
          color: "rgb(149, 155, 202)",
        },
        {
          title: "Designe Team Member",
          company: "Model United Nations",
          company_url: "",
          logo_path: "mun logo.jpg",
          duration: "Dec 2022 - May 2024",
          location: "IIIT Naya Raipur",
          description:
            "Contributed as a member of the design team, creating various designs for the club while actively engaging in and supporting multiple club events.",
          color: "rgb(135, 111, 71)",
        },
        {
          title: "Designe Team Member",
          company: "Drama Club(CDT)",
          company_url: "",
          logo_path: "cdt2.jpg",
          duration: "Dec 2019 - May 2020",
          location: "IIIT Naya Raipur",
          description:
            "Worked as a member of designe team, contributing to a variety of designs for the club and also actively participated in various events of the club.",
          color: "rgb(132, 62, 132)",
        },
        {
          title: "Mentee",
          company: "ShiFe",
          company_url: "",
          logo_path: "shifi logo.png",
          duration: "Jan 2025",
          location: "SRM IST Kattankulathur",
          description:
            "Gained comprehensive knowledge and practical experience in Web3 and emerging technologies through active participation in this mentorship program.",
          color: "rgb(63, 103, 166)",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Machine Learning related projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "0",
      image: "algo visualiser.png",
      name: "GraphX DSA",
      url: "https://graphi-x-dsa.vercel.app/",
      description:
        "An interactive tool for visualizing algorithms step-by-step. with user input data bridging theory with practice.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "0",
      image: "sattellite image.jpg",
      name: "Super Resolution of Sattellite Imageniry",
      description:
        "A super-resolution pipeline for Sentinel-2 and MODIS satellites for enhanced clarity.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
        {
          name: "NumPy",
          iconifyClass: "logos-numpy",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
    },

    {
      id: "2",
      image: "diabtese image.webp",
      name: " Persona-Based T2DM Analysis",
      url: "https://github.com/swati323ch/Microsoft-CWB-T2DM-analysis",
      description:
        "It is a ML models to identify Type 2 diabetes and persona creation and to predict diabetes risk within using clustring, enabling targeted interventions and improving personalized healthcare strategies.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos-numpy",
        },
        {
          name: "Matplotlib",
          iconifyClass: "devicon:matplotlib",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
      ],
    },
    {
      id: "3",
      image: "Geo-fencing image.jpg",
      name: "AarogyaTrack",
      url: "https://github.com/swati323ch/Aarogya_Direct",
      description:
        " Mobile application build to track the patients in quarantine zones using a geofencing system ,enabling secure monitoring, real-time tracking, and alert notifications.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Google Maps API",
          iconifyClass: "logos-google-maps",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "DART",
          iconifyClass: "logos-dart",
        },
      ],
    },
    {
      id: "1",
      image: "sanskrit image.jpg",
      name: "Mantrika - Sanskrit Morphological Analyzer ",
      url: "https://github.com/swati323ch/Sanskrit-Morphological-Analyzer",
      description:
        "It is an NLP-based tool for analyzing Sanskrit morphology, designed to process and understand the complex grammatical structures of Sanskrit, helping linguists in understanding Sanskrit texts.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "TensorFlow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "spaCy",
          iconifyClass: "simple-icons:spacy",
        },
        {
          name: "NumPy",
          iconifyClass: "logos-numpy",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },

    /*{
      id: "5",
      image: "algo visualiser.png",
      name: "ML Algorithm Visualizer",
      url: "https://github.com/swati323ch/Machine-Learning-Visualizer",
      description:
        "A web tool that helps users visualize ML algorithms allowing users to apply algorithms to their datasets along with  simultaneous explanations of algorithm structures on realtime basis.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Node.js",
          "iconifyClass": "logos-nodejs"
        },
        {
          "name": "React.js",
          "iconifyClass": "logos-react"
        },
       
      ],
    },
    */
    {
      id: "6",
      image: "fashion recomendation system.webp",
      name: "Trendify - Trend-Centric Recommendation System",
      url: "https://github.com/swati323ch/Trendcentric-Recommendation-System",

      description:
        "A Recommendation System to personalize product suggestions by analyzing user preferences, purchase history, and browsing behavior, providing recommendations with detailed product visuals.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },

        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    /*{
      id: "7",
      name: "Hex Game",
      url: "https://github.com/swati323ch/Hex_Game",
      description:
        "A Hex game that covers all the basic features, including board setup, player turns, pathfinding algorithms, and a computer-based player",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    
    {
      id: "9",
      
      name: "Ethanol Quality Predection",
      url: "https://github.com/swati323ch/Ethanol-Quality-predection",
      description:
        "An ML model built using a Random Forest classifier to predict the quality of ethanol, trained on a dataset of samples with known quality ratings, and designed to evaluate the quality of new, unseen samples.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    */

    {
      id: "8",
      image: "quote generator.png",
      name: "Quote Generator",
      url: "https://github.com/swati323ch/Dynamic-Webpages",
      description:
        "Made a GUI to generate quotes. Also build weather App to display current weather conditions of a location.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "14",
      image: "creditcard fraud.jpeg",
      name: "Credit-Card Default Predictor",
      url:
        "https://github.com/swati323ch/Exploratory-Data-Analisis-on-Financial-Dataset",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      image: "portfolio.jpeg",
      name: "Portfolio Website",
      url: "",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {},
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
