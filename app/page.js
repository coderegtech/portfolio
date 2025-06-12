"use client";

import { useDarkMode } from "@/utils";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Minus,
  Moon,
  Phone,
  Square,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaJava, FaServer } from "react-icons/fa";
import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const HomeScreen = () => {
  const githubUsername = "coderegtech";
  const [contributions, setContributions] = useState();

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}`
        );
        const data = await res.json();
        setContributions(data);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      }
    };

    fetchContributions();
  }, []);

  const workExperiences = [
    {
      company: "Uptura Tech Inc.",
      position: "Front-end Software Developer",
      duration: "Sept. 2024 - Present",
      description: "",
    },
    {
      company: "Zerobstacle Technologies",
      position: "Front-end Web developer",
      duration: "Nov. 2022 - July 2023",
      description: "",
    },
    {
      company: "Freelancing",
      position: "Fullstack Software Developer",
      duration: "Aug. 2021 - Present",
      description: "",
    },
  ];

  const education = [
    {
      institution: "Fullbright College Inc.",
      degree: "B.S. Computer Science",
      duration: "2024 - present",
    },
    {
      institution: "AMA Computer Learning Center",
      degree: "TVL - ICT",
      duration: "2019 - 2021",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-blue-500" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-800" /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-600" /> },
        { name: "Angular", icon: <SiAngular className="text-red-500" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "Nest.js", icon: <SiNestjs className="text-red-500" /> },
        { name: "REST API", icon: <FaServer className="text-blue-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-purple-500" /> },
      ],
    },
    {
      category: "Tools & DB",
      items: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Mysql", icon: <SiMysql className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Linux", icon: <SiLinux className="text-black" /> },
      ],
    },
  ];

  const projects = [
    {
      name: "E-Commerce Inventory Management System",
      description:
        "Ecommerce Inventoy Management System using Angular for frontend and Nestjs",
      url: "https://github.com/coderegtech/eim-system",
    },
    {
      name: "Youtube Clone",
      description: "Youtube UI Clone using Reactjs and Tailwindcss",
      url: "https://github.com/coderegtech/youtube-ui-clone",
    },
    {
      name: "Adventour App",
      description:
        "A travel booking app using nextjs, firebase and Fruitask for REST API database",
      url: "https://github.com/coderegtech/adventour-app",
    },
    {
      name: "Chatterzz ph",
      description: "Chat Web App using Nextjs and Firebase",
      url: "https://github.com/coderegtech/ChatterzzPh",
    },
  ];

  const { isDark, toggleTheme, mounted } = useDarkMode();

  if (!mounted) return null;
  return (
    <div
      className={`w-full min-h-screen over ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          : "bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-100"
      } flex justify-center items-center p-4 transition-all duration-300`}
    >
      <div className="block sm:hidden">
        <p
          className={`text-center text-3xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Not available in Mobile View
        </p>
      </div>
      <WindowScreen isDark={isDark} onToggleTheme={toggleTheme}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Profile Section */}
            <div
              className={`border-2 border-r-8 border-b-8 ${
                isDark
                  ? "border-r-neutral-300 border-b-neutral-300 border-gray-600 bg-gray-800"
                  : "border-r-black border-b-black border-neutral-500 bg-white"
              } shadow-xl rounded-xl p-4 flex flex-col md:flex-row gap-4 transition-all duration-300`}
            >
              <div
                className={`w-full md:w-56 h-56 border-2 ${
                  isDark ? "border-gray-600" : "border-neutral-500"
                } rounded-xl flex items-center justify-center overflow-hidden`}
              >
                <div
                  className={`${
                    isDark ? "bg-gray-700" : "bg-gray-100"
                  } rounded-xl flex items-center justify-center`}
                >
                  <Image
                    src="https://avatars.githubusercontent.com/u/98440814?s=400&u=5830a1c02bef68d3142f831bea01bc8c540ae4b9&v=4"
                    width={224}
                    height={224}
                    alt="profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="flex-1 px-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h1
                        className={`text-3xl font-bold ${
                          isDark ? "text-white" : "text-gray-800"
                        } uppercase`}
                      >
                        John Reygun A. Danag
                      </h1>
                      <span
                        className={`text-lg ${
                          isDark ? "text-green-500" : "text-gray-700"
                        } font-medium`}
                      >
                        Software Developer
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://www.facebook.com/john.reygun.danag.2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center"
                      >
                        <span
                          className={`border-2 ${
                            isDark
                              ? "border-gray-600 hover:bg-gray-700"
                              : "border-neutral-500 hover:bg-gray-100"
                          } rounded-full p-2 transition`}
                        >
                          <Facebook
                            className={`${
                              isDark ? "text-white" : "text-gray-700"
                            }`}
                          />
                        </span>
                      </a>
                      <a
                        href={`https://github.com/${githubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center"
                      >
                        <span
                          className={`border-2 ${
                            isDark
                              ? "border-gray-600 hover:bg-gray-700"
                              : "border-neutral-500 hover:bg-gray-100"
                          } rounded-full p-2 transition`}
                        >
                          <Github
                            className={`${
                              isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                          />
                        </span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/john-reygun-danag-9a9aa0215/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center"
                      >
                        <span
                          className={`border-2 ${
                            isDark
                              ? "border-gray-600 hover:bg-gray-700"
                              : "border-neutral-500 hover:bg-gray-100"
                          } rounded-full p-2 transition`}
                        >
                          <Linkedin
                            className={`${
                              isDark ? "text-white" : "text-gray-700"
                            }`}
                          />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 py-4">
                    <div
                      className={`border-2 ${
                        isDark
                          ? "border-gray-600 bg-gray-700"
                          : "border-neutral-500 bg-white"
                      } p-2 min-w-32 rounded-lg transition-all duration-300`}
                    >
                      <h2
                        className={`text-2xl font-bold ${
                          isDark ? "text-green-500" : "text-gray-800"
                        }`}
                      >
                        2+
                      </h2>
                      <p
                        className={`text-base ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        experience
                      </p>
                    </div>

                    <div
                      className={`border-2 ${
                        isDark
                          ? "border-gray-600 bg-gray-700"
                          : "border-neutral-500 bg-white"
                      } p-2 min-w-32 rounded-lg transition-all duration-300`}
                    >
                      <h2
                        className={`text-2xl font-bold ${
                          isDark ? "text-green-500" : "text-gray-800"
                        }`}
                      >
                        50+
                      </h2>
                      <p
                        className={`text-base ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        projects
                      </p>
                    </div>

                    <div
                      className={`border-2 ${
                        isDark
                          ? "border-gray-600 bg-gray-700"
                          : "border-neutral-500 bg-white"
                      } p-2 min-w-32 rounded-lg transition-all duration-300`}
                    >
                      <h2
                        className={`text-2xl font-bold ${
                          isDark ? "text-green-500" : "text-gray-800"
                        }`}
                      >
                        20+
                      </h2>
                      <p
                        className={`text-base ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        clients
                      </p>
                    </div>
                  </div>

                  <div>
                    <p
                      className={`text-base ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } italic`}
                    >
                      &quot;Passionate software developer with expertise in
                      building scalable web applications. Specialized in React
                      ecosystem and cloud-native solutions. Focused on creating
                      efficient, maintainable code with excellent user
                      experiences.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div
              className={`border-2 border-r-8 border-b-8 ${
                isDark
                  ? "border-r-neutral-300 border-b-neutral-300 border-gray-600 bg-gray-800"
                  : "border-r-black border-b-black border-neutral-500 bg-white"
              } shadow-xl rounded-xl  transition-all duration-300 overflow-hidden`}
            >
              <div
                className={`${
                  isDark ? "bg-gray-700" : "bg-gray-100"
                } p-3 border-b ${
                  isDark ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <h1
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Contact Information
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 border ${
                      isDark
                        ? "border-gray-600 bg-gray-700"
                        : "border-gray-300 bg-gray-50"
                    } rounded-full`}
                  >
                    <Mail
                      className={`${
                        isDark ? "text-green-500" : "text-gray-700"
                      }`}
                      size={18}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Email
                    </p>
                    <p
                      className={`${
                        isDark ? "text-gray-200" : "text-gray-800"
                      } font-medium`}
                    >
                      reygundanag55@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 border ${
                      isDark
                        ? "border-gray-600 bg-gray-700"
                        : "border-gray-300 bg-gray-50"
                    } rounded-full`}
                  >
                    <Phone
                      className={`${
                        isDark ? "text-green-500" : "text-gray-700"
                      }`}
                      size={18}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Phone
                    </p>
                    <p
                      className={`${
                        isDark ? "text-gray-200" : "text-gray-800"
                      } font-medium`}
                    >
                      (+63) 967-5439-528
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 border ${
                      isDark
                        ? "border-gray-600 bg-gray-700"
                        : "border-gray-300 bg-gray-50"
                    } rounded-full`}
                  >
                    <MapPin
                      className={`${
                        isDark ? "text-green-500" : "text-gray-700"
                      }`}
                      size={18}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={`${
                        isDark ? "text-gray-200" : "text-gray-800"
                      } font-medium`}
                    >
                      Puerto Princesa City, Palawan, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div
              className={`border-2 border-r-8 border-b-8 ${
                isDark
                  ? "border-r-neutral-300 border-b-neutral-300 border-gray-600 bg-gray-800"
                  : "border-r-black border-b-black border-neutral-500 bg-white"
              } shadow-xl rounded-xl transition-all duration-300 overflow-hidden`}
            >
              <div
                className={`${
                  isDark ? "bg-gray-700" : "bg-gray-100"
                } p-3 border-b ${
                  isDark ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <h1
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Github Projects
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`border ${
                      isDark
                        ? "border-gray-600 bg-gray-700 hover:bg-gray-600"
                        : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                    } rounded-xl p-4 hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`${
                          isDark ? "bg-gray-600" : "bg-gray-100"
                        } border-2 border-dashed rounded-xl w-16 h-16 mr-3 flex justify-center items-center`}
                      >
                        <Github
                          className={`${
                            isDark ? "text-green-500" : "text-gray-700"
                          }`}
                          size={30}
                        />
                      </div>
                      <h2
                        className={`font-bold text-lg ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {project.name}
                      </h2>
                    </div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Work Experience */}
            <div
              className={`border-2 border-r-8 border-b-8 ${
                isDark
                  ? "border-r-neutral-300 border-b-neutral-300 border-gray-600"
                  : "border-r-black border-b-black border-neutral-500"
              } shadow-xl rounded-xl overflow-hidden transition-all duration-300`}
            >
              <div
                className={`${
                  isDark ? "bg-gray-700" : "bg-gray-100"
                } p-3 border-b ${
                  isDark ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <h1
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Work Experience
                </h1>
              </div>
              <div className={`p-4 ${isDark ? "bg-gray-800" : "bg-white"}`}>
                <div className="space-y-4">
                  {workExperiences.map((exp, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        isDark
                          ? "border-gray-600 bg-gray-700"
                          : "border-gray-200 bg-gray-50"
                      } transition-all duration-300`}
                    >
                      <h2
                        className={`font-bold text-lg ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {exp.position}
                      </h2>
                      <p
                        className={`${
                          isDark ? "text-green-500" : "text-gray-700"
                        } font-medium`}
                      >
                        {exp.company}
                      </p>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {exp.duration}
                      </p>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        } mt-2`}
                      >
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div
              className={`border-2 border-r-8 border-b-8 ${
                isDark
                  ? "border-r-neutral-300 border-b-neutral-300 border-gray-600"
                  : "border-r-black border-b-black border-neutral-500"
              } shadow-xl rounded-xl overflow-hidden transition-all duration-300`}
            >
              <div
                className={`${
                  isDark ? "bg-gray-700" : "bg-gray-100"
                } p-3 border-b ${
                  isDark ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <h1
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Education
                </h1>
              </div>
              <div className={`p-4 ${isDark ? "bg-gray-800" : "bg-white"}`}>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        isDark
                          ? "border-gray-600 bg-gray-700"
                          : "border-gray-200 bg-gray-50"
                      } transition-all duration-300`}
                    >
                      <h2
                        className={`font-bold text-lg ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {edu.degree}
                      </h2>
                      <p
                        className={`${
                          isDark ? "text-green-500" : "text-gray-700"
                        } font-medium`}
                      >
                        {edu.institution}
                      </p>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {edu.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div
            className={`col-span-4 border-2 border-r-8 border-b-8 ${
              isDark
                ? "border-r-neutral-300 border-b-neutral-300 border-gray-600"
                : "border-r-black border-b-black border-neutral-500"
            } shadow-xl rounded-xl overflow-hidden transition-all duration-300`}
          >
            <div
              className={`${
                isDark ? "bg-gray-700" : "bg-gray-100"
              } p-3 border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}
            >
              <h1
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Skills & Tools
              </h1>
            </div>
            <div className={`p-4 ${isDark ? "bg-gray-800" : "bg-white"}`}>
              <div className="grid grid-cols-4 gap-4">
                {skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      isDark
                        ? "border-gray-600 bg-gray-700"
                        : "border-gray-200 bg-gray-50"
                    } transition-all duration-300`}
                  >
                    <h2
                      className={`font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      } border-b ${
                        isDark ? "border-gray-600" : "border-neutral-300"
                      } pb-2 mb-2`}
                    >
                      {skillGroup.category}
                    </h2>
                    <div className="grid grid-cols-3 gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <div
                          key={i}
                          className={`flex flex-col items-center p-2 rounded-lg border ${
                            isDark
                              ? "border-gray-600 bg-gray-600 hover:bg-gray-500"
                              : "border-gray-200 bg-white hover:bg-gray-50"
                          } transition-all duration-300`}
                        >
                          <div className="text-2xl mb-1">{skill.icon}</div>
                          <span
                            className={`text-xs ${
                              isDark ? "text-gray-200" : "text-gray-700"
                            } font-medium text-center`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WindowScreen>
    </div>
  );
};

const WindowScreen = ({ children, isDark, onToggleTheme }) => {
  return (
    <div
      className={`hidden md:block w-full max-w-7xl min-h-[500px] border-2 overflow-hidden ${
        isDark ? "border-gray-600 bg-gray-800" : "border-neutral-500 bg-white"
      } rounded-xl relative shadow-2xl transition-all duration-300`}
    >
      <header
        className={`w-full border-b p-2 flex justify-between items-center ${
          isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"
        } transition-all duration-300`}
      >
        <button
          onClick={onToggleTheme}
          className={`flex items-center gap-2 px-3 py-1 rounded-md ${
            isDark
              ? "bg-gray-600 hover:bg-gray-500 text-green-500"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          } transition-all duration-300`}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          <span className="text-sm font-medium">
            {isDark ? "Light" : "Dark"}
          </span>
        </button>
        <div className="flex gap-x-2">
          <button
            className={`p-1 rounded-md ${
              isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"
            } transition`}
          >
            <Minus
              size={20}
              className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
            />
          </button>
          <button
            className={`p-1 rounded-md ${
              isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"
            } transition`}
          >
            <Square
              size={20}
              className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
            />
          </button>
          <button
            className={`p-1 rounded-md ${
              isDark ? "hover:bg-red-900" : "hover:bg-red-100"
            } transition`}
          >
            <X
              size={20}
              className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
            />
          </button>
        </div>
      </header>
      <div className="w-full h-[calc(100vh-10rem)] p-6 relative overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default HomeScreen;
