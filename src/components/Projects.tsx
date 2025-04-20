import { useState } from "react";

type Project = {
  title: string;
  tech: string;
  description: string;
  image?: string;
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Task Management API",
    tech: "Python, Flask, AWS EC2, Docker",
    description: "Built a task manager API deployed on AWS.",
    github: "https://github.com/hkpham/task-manager-api",
  },

  {
    title: "Virtual Real Estate Assistant",
    tech: "Bubble.io, OpenAI Whisper-1, Zapier, OpenAI Assistant",
    description: "Real Estate Virtual Assistant with Voice Interaction & File Processing",
    demo: "https://drive.google.com/file/d/1U4DQpnmBaTFsA5j46EVcB_X0p0gLXQNi/view?usp=drive_link",
    github: "https://syrenavirtualassistant.bubbleapps.io/main"
  },
  
  {
    title: "Chip Consumption Analysis – Quantum Virtual Internship",
    tech: "R, Data Analysis, Business Insights",
    description: "Analyzed customer purchasing behavior and provided insights to improve chip sales strategy using R.",
    demo: "#",
    github: "#",
  },

  
  {
    title: "Call Centre Performance Analytics - Pwc Virtual Internship",
    tech: "PowerBI, Excel, Interactive Dashboard",
    description: "Designed and developed an interactive Power BI dashboard to visualize customer satisfaction trends, call metrics, and agent performance.",
    demo: "https://app.powerbi.com/links/nExz-I5Dsa?ctid=eb34f74a-58e7-4a8b-9e59-433e4c412757&pbi_source=linkShare",
    
  },
  
  {
    title: "News Analytics Chatbot",
    tech: "Python, SQlite, LangChain, FastAPI, Ollama, Pandas",
    description: "Developed a local AI-powered chatbot that fetches, stores, and analyzes daily news articles. The chatbot enables users to search for news, track reading history, and analyze sentiment trends using natural language queries.",
    github: "https://github.com/hkpham/news-analytics-chatbot",
  },

  {
    title: "Arsenal 2020-2023 Performance Analytics",
    tech: "BeautifulSoup, Pandas, Scipy, Matplotlib",
    description: "This project aims to analyze the performance of Arsenal Football Club during the three-year tenure of Mikel Arteta as the head coach, spanning from 2020 to 2023.",
    github: "https://github.com/hkpham/Arsenal-2020-2023-Data-Analysis",
  },

  {
    title: "Spotify Music Website",
    tech: "HTML, CSS, JavaScript, React",
    description: "A website for users to discover, preview and listen to new releases using Spotify APIs.",
    demo: "https://youtu.be/RN1Vs4vS4xM",
    github: "https://github.com/hkpham/Spotify-music-website",
  },

  

];

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-10 text-center">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div
              className="cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-500">{project.tech}</p>
              <p className="text-xs text-blue-400 mt-1">
                {openIndex === index ? "Click to collapse" : "Click to expand"}
              </p>
            </div>

            {openIndex === index && (
              <div className="mt-4 text-sm text-gray-700 space-y-2">
                <p>{project.description}</p>
                <div className="flex gap-4 text-sm">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>

  );
}
