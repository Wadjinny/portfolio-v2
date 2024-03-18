import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import d3jsCsvVis from "/demo_d3js.png";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import codacademy from "/codacademy.png"
import google from "/google.png"
import toeic from "/toeic.png"
import rlang from "/rlang.png"
import angular from "/angular.png"
import php from "/php.png"
import js from "/js.png"
import java from "/java.png"
import jquery from "/jquery.png"
import { FaGooglePlay } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Certifications",
    hash: "#certifications"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Education",
    hash: "#education"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const certificationsData = [
  {
    title: "Engineer Data in Google Cloud",
    description:
      "Data Engineering on Google Cloud Platform",
    date: "March 2024",
    link: "https://www.cloudskillsboost.google/public_profiles/b5f8fb9a-6821-452c-ade6-0308ce9148f0/badges/8125931",
    icon: google
  },
  {
    title: "Insights from Data with BigQuery",
    description:
      "Data Analysis with BigQuery",
    date: "February 2024",
    link: "https://www.cloudskillsboost.google/public_profiles/b5f8fb9a-6821-452c-ade6-0308ce9148f0/badges/8111571",
    icon: google
  },
  {
    title: "The Test of English for International Communication (TOEIC)",
    description: "Score of 930/990",
    date: "March 2023",
    link: "https://www.etsglobal.org/fr/en/digital-score-report/90C2FEAEE82C20D6B969926C05B0C9C2EA3F97A4BE32BCF49A971C4FACBAC036bUVOYXV3aWZhVHE3Y0JkRnJJeDNGU0NpUUZ1ME9tT1BCYUdFRmxPV2E0dnpRdzlC",
    icon: toeic,
  },
  {
    title: "SQL",
    description: "Advanced Querying with transact-SQL, Joining Data, Modifying Data, Querying Data, Subqueries, Table Expressions, Using Set Operators, Using Window Functions",
    date: "August 2022",
    link: "https://www.codecademy.com/profiles/ilyaswadjinny0948444433/certificates/042a4e5884e3eb6ea1f2a12be6abb851",
    icon: codacademy,
  },
  {
    title: "Certification R lang",
    description: "Statistical Inference, Linear Regression, Logistic Regression, Decision Trees, Random Forest, Clustering, Time Series, R Markdown, Shiny",
    date: "September 2022",
    link: "https://www.sololearn.com/certificates/CT-XDD3JOVP",
    icon: rlang,
  },
  {
    title: "Certification Angular+NestJS",
    description: "Building a full-stack application with Angular and NestJS",
    date: "September 2020",
    link: "https://www.sololearn.com/Certificate/1092-843422/pdf/",
    icon: angular,
  },
  {
    title: "Certification PHP",
    description: "Advanced PHP, Object-Oriented PHP, PHP Security, PHP Database, PHP Web Services, PHP Testing, PHP CMS, PHP Frameworks",
    date: "February 2017",
    link: "https://www.sololearn.com/Certificate/1059-843422/pdf/",
    icon: php,
  },
  {
    title: "Certification JavaScript",
    description: "Dom manipulation, Events, Forms, Object Oriented JavaScript, Asynchronous JavaScript, Error Handling, Regular Expressions, Modules",
    date: "August 2016",
    link: "https://www.sololearn.com/Certificate/1024-843422/pdf/",
    icon: js,
  },
  {
    title: "Certificatrion JAVA",
    description: "OOP, Data Structures, Algorithms, Exception Handling, File I/O, Multithreading, Networking, Swing, Applets, JavaFX, JPA, JUnit, Maven, Gradle, JShell",
    date: "May 2016",
    link: "https://www.sololearn.com/Certificate/1068-843422/pdf/",
    icon: java,
  },
  {
    title: "Certififcation JQuery",
    description: "DOM, Events, Effects, AJAX, JSON, Utilities, Plugins, UI, Widgets, Interactions",
    date: "February 2016",
    link: "https://www.sololearn.com/Certificate/1082-843422/pdf/",
    icon: jquery,
  },

] as const;

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ilyas-wadjinny",
    icon: FaLinkedin
  },
  {
    name: "GitHub",
    url: "https://github.com/Wadjinny",
    icon: FaGithub
  },
  {
    name: "Email",
    url: "mailto:ilyas.wadjinny@gmail.com",
    icon: IoMail
  },
  {
    name: "Medium",
    url: "https://medium.com/@ilyas.wadjinny",
    icon: FaMedium
  },
  {
    name: "My apps on Google Play",
    url: "https://play.google.com/store/apps/dev?id=7483698372592272765&hl",
    icon: FaGooglePlay
  }
] as const;

export const experiencesData = [
  {
    Company: "Milvue",
    title: "Data Engineer & Software engineer ",
    location: "Paris, France",
    description:`
- Develop a pipeline that exploits GCP telemetry data to analyze the use of the radio image recognition service, as well as creating a dashboard to present the associated KPIs.
- Create a python package that allows the comparison of the predictions of the radio image recognition algorithm with reference results, using comparison measures such as Pearson correlation, ICC and Bland-Altman diagram etc.
- Develop an interactive interface that exploits the comparison package to display dynamic diagrams and allow assessment of model weaknesses.
- Creation of a python package for analyzing and forecasting patient flows, using time-series prediction techniques.
- Developed an interactive interface based on the flow prediction package, enabling the display of results and other key metrics.
- **Skills:** Python, Pandas, scipy/stats, Google Cloud, Streamlit
`,
    icon: React.createElement(CgWorkAlt),
    date: "sept. 2022 - sept. 2023"
  },
  {
    Company: "EvidenceB",
    title: "Data Engineer & Machine learning",
    location: "Paris, France",
    description:
      `
- Develop a tool to extract and transform raw JSON data from several learning platforms (Languages, Mathematics, Latin) while standardizing their formats and enriching them with KPIs.
- Develop a K-means model to classify 600k students according to their results in order to offer them personalized follow-up.
- Create a dashboard to present KPIs linked to student results.
- Create a tool to visualize the rules that allow students to move from one activity to another in the learning platform.
- **Unsupervised learning & clustering:** K-means, Scikit-Learn
- **Data visualization & filtering:** Matplotlib, NetworkX, Pandas, Streamlit
- **DevOps:** Docker, git, Jira, Selenium
`,
    icon: React.createElement(CgWorkAlt),
    date: "déc. 2020 - août 2022"
  }
] as const;

export const projectsData = [
  {
    title: "D3 CSV Visualisation",
    description: `An extremely efficient & interactive web tool for gaining insights directly from a CSV file without any need for preprocessing.  
       Easily Explore your data, and find intersitng correlation, visually!`,
    tags: ["JavaScript", "GCP"],
    icons: ["logos:d3", "logos:javascript", "logos:google-cloud"],
    imageUrl: d3jsCsvVis,
    githubLink: "https://github.com/Wadjinny/d3_csv_viz"
  }
] as const;
