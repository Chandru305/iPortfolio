// data.tsx
import { ReactNode } from "react";
import { RiNextjsLine, RiTailwindCssFill, RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { DiNodejs, DiMysql } from "react-icons/di";
import { SiMongodb, SiExpress, SiPostgresql, SiTableau } from "react-icons/si";
import { FaReact, FaJava, FaSquareGithub } from "react-icons/fa6";
import { LuSquareDot } from "react-icons/lu";

// Types
export interface TechInfo {
  url: string;
  icon: ReactNode;
}

export interface Project {
  name: string;
  imageSrc: string;
  description: string;
  techStack: string[];
  gitLink: string;
  liveLink: string;
}

// Tech Dictionary
export const techDict: Record<string, TechInfo> = {
  NextJS: { url: "https://nextjs.org/", icon: <RiNextjsLine /> },
  TypeScript: { url: "https://www.typescriptlang.org/", icon: <TbBrandTypescript /> },
  NodeJS: { url: "https://nodejs.org/", icon: <DiNodejs /> },
  PostgreSQL: { url: "https://www.postgresql.org/", icon: <SiPostgresql /> },
  React: { url: "https://reactjs.org/", icon: <FaReact /> },
  TailwindCSS: { url: "https://tailwindcss.com/", icon: <RiTailwindCssFill /> },
  MongoDB: { url: "https://www.mongodb.com/", icon: <SiMongodb /> },
  ExpressJS: { url: "https://expressjs.com/", icon: <SiExpress /> },
  Java: { url: "https://www.java.com/", icon: <FaJava /> },
  JavaScript: { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <RiJavascriptLine /> },
  SQL: { url: "https://www.sql.org/", icon: <DiMysql /> },
  Git: { url: "https://git-scm.com/", icon: <FaSquareGithub /> },
  Python: { url: "https://www.python.org/", icon: <LuSquareDot /> },
  Transformers: { url: "https://huggingface.co/transformers/", icon: <LuSquareDot /> },
  TensorFlow: { url: "https://www.tensorflow.org/", icon: <LuSquareDot /> },
  Keras: { url: "https://keras.io/", icon: <LuSquareDot /> },
  Streamlit: { url: "https://streamlit.io/", icon: <LuSquareDot /> },
  PyTorch: { url: "https://pytorch.org/", icon: <LuSquareDot /> },
  "Scikit-learn": { url: "https://scikit-learn.org/", icon: <LuSquareDot /> },
  Tableau: { url: "https://www.tableau.com/", icon: <SiTableau /> },
};

// Hero Section Data
export const heroTags = ["Full-Stack Developer", "AI/ML Enthusiast", "Data Analyst"];

export const heroText =
  "Driven by the thirst for knowledge and a passion for tech. Eager to learn, grow, and contribute through impactful projects and collaborative experiences. Let’s connect and create something amazing together!";
// Projects Data
export const projects: Project[] = [
  {
    name: "Stock Price Forecasting",
    imageSrc: "/Stock_Price_Forecasting.png",
    description:
      "Developed a predictive stock price forecasting system using deep learning techniques. Implemented an LSTM-based neural network with TensorFlow and Keras to analyze historical stock data and predict future trends. Integrated sentiment analysis from financial news to improve model accuracy. Evaluated model performance using MSE and RMSE metrics, with hyperparameter optimization using Grid Search. The application was deployed with Streamlit for real-time stock analysis.",
    techStack: ["Python", "Transformers", "TensorFlow", "Keras", "Streamlit", "PyTorch"],
    gitLink: "https://github.com/Chandru305/Stock_Price_Forecasting",
    liveLink: "https://stockpriceforecasting-m8bwim85lqhfzdot5b4bl8.streamlit.app/"
  },
  {
    name: "To-Do List (MERN Stack)",
    imageSrc: "/To_Do_List.png",
    description:
      "Designed and developed a feature-rich To-Do List application using the MERN stack (MongoDB, Express, React, Node.js). Allows users to create, edit, complete, and delete tasks with an intuitive user interface. Integrated real-time database synchronization with MongoDB and deployed the backend using Express.js. Ensured a responsive UI with TailwindCSS and React hooks for a smooth user experience.",
    techStack: ["React", "NodeJS", "MongoDB", "ExpressJS"],
    gitLink: "https://github.com/Chandru305/To_Do_List",
    liveLink: "https://to-do-list-nine-phi-96.vercel.app/"
  },
  {
    name: "Spam Email Detection",
    imageSrc: "/Spam_Email_Detection.png",
    description:
      "Developed an AI-powered spam email detection system using machine learning techniques. Implemented an SVM-based classification model with Scikit-learn to accurately differentiate between spam and legitimate emails. Extracted key email features using natural language processing (NLP) and TF-IDF vectorization. Evaluated model accuracy using precision, recall, and F1-score metrics. Built a Streamlit-based UI for interactive testing, allowing users to input email text and receive real-time spam classification.",
    techStack: ["Python", "Scikit-learn", "Streamlit"],
    gitLink: "https://github.com/Chandru305/Spam_email_detection",
    liveLink: "https://spamemaildetection-gvw6tjxuqufpuyfrafh9u8.streamlit.app/"
  },
];

// About Section Data
export const aboutDescription =
  "I am a final-year BE student in Artificial Intelligence and Machine Learning at Dayanand Sagar College of Engineering. With a strong foundation in software development and data analytics, I am passionate about tackling complex problems using emerging technologies. I have experience working with machine learning models, web development, and automation tools. My interest lies in building functional yet aesthetically pleasing projects. Outside of coding, I enjoy reading novels and exploring new technologies.";

export const aboutSkillTags = [
  "NextJS",
  "React",
  "NodeJS",
  "ExpressJS",
  "Java",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "SQL",
  "Python",
  "MongoDB",
  "Git",
  "Tableau"
];
