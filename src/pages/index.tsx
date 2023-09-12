import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FaEnvelope, FaGithub } from "react-icons/fa";

import { Header, Hr, Link, Paragraph, Project } from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh&lsquo;s Website</title>
        <meta name="description" content="Josh's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="border-b border-gray-900 p-3 ml-2 bg-gray-900">
        <span className="text-xl text-gray-300">Joshua </span>
        <span className="text-xl text-gray-400">Goss</span>
        <span> - </span>
      </header>

      <section className="border-b border-gray-900 bg-gray-700 pt-3  pb-5 px-4">
        <h1 className="text-4xl text-white ml-6 pt-3 mb-4">
          <span className="block">Hi,</span>
          <span className="text-red-400 block">I&apos;m Josh,</span>
          <span className="block">Full Stack Developer,</span>
        </h1>
        <p className="text-gray-300 ml-6">
          I&apos;m a Full Stack Developer with 4+ years of experience. I&apos;m
          well-versed in a range of technologies, including Python and Node.js
          for backend development, React for creating engaging frontends, and
          HTML/CSS for crafting polished interfaces. My passion lies in
          transforming ideas into functional, user-friendly web applications.
        </p>

        <div className="text-gray-400 ml-10 mt-5 mb-3 ">
          <a className="mr-3" href="https://github.com/joshgoss">
            <i className="fa-brands fa-github mr-1" />
            View Github
          </a>

          <a href="/resume.pdf">
            <i className="fa fa-file-pdf mr-1" />
            Download Resume
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b  border-gray-900">
        <h2 className="text-gray-100 ml-7 mb-5 text-lg pt-3">My Skills</h2>

        <div className="flex gap-4 ml-6 pb-5 mr-4 flex-col md:flex-row">
          <div className="flex text-gray-200 flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-desktop text-[44px] mr-4" />
            <div>
              <h3 className="font-bold  mb-1 w-32">Full Stack</h3>
              <p className="text-gray-400 text-sm">
                With over 4 years in Full Stack Development, I&apos;m skilled in
                Python, Node.js, React, HTML, and CSS. From backend to frontend,
                I create seamless web experiences.
              </p>
            </div>
          </div>
          <div className="flex text-gray-200 flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-brands fa-python text-[57px] mr-4" />
            <div>
              <h3 className="font-bold  mb-1">Python</h3>
              <p className="text-gray-400 text-sm">
                I&apos;ve leveraged Python&apos;s capabilities to build
                efficient backends using Flask and FastAPI. This include complex
                RESTful backend APIs using SQLAlchemy for database interactions
                and custom permissions for endpoints.
              </p>
            </div>
          </div>
          <div className="flex text-gray-200 flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-brands fa-node-js text-[57px]  mr-4" />
            <div>
              <h3 className="font-bold  mb-1">Node.JS</h3>
              <p className="text-gray-400 text-sm">
                Significant experience creating RESTful Node.js APIs and custom
                scripts for data processing or integrating with cloud services.
              </p>
            </div>
          </div>
          <div className="flex text-gray-200 flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-brands fa-react text-[50px] mr-4" />
            <div>
              <h3 className="font-bold  mb-1">React</h3>
              <p className="text-gray-400 text-sm">
                I bring a solid four years of expertise in React development to
                the table, during which I've honed my skills in crafting
                exceptional user interfaces and optimizing overall user
                experiences. My passion for web development, coupled with my
                in-depth knowledge of React, allows me to create dynamic and
                engaging applications that meet both user and business needs.
              </p>
            </div>
          </div>
          <div className="flex text-gray-200 flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-cloud text-[40px] mr-4" />
            <div>
              <h3 className="font-bold  mb-1">Cloud Services</h3>
              <p className="text-gray-400 text-sm">
                Experience with hosting front-end and backend on AWS and Azure
                and integrating their servies. This includes AWS EC2, AWS S3,
                AWS SQS, Azur Blob Storage and Azure App Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 pb-8">
        <h2 className="text-lg ml-6 pt-2 mb pb-3">Projects</h2>

        <div className="flex flex-row flex-wrap gap-3 mx-4">
          <Project
            title="Habit Tracker"
            github="https://github.com/joshgoss/habit-tracker"
            url={"https://habit-tracker.joshgoss.com"}
            description="A habit tracking application with support for tracking streaks."
            imageUrl="/habit-tracker.png"
            techStack={[
              "OAuth (Google & Github)",
              "Fastify",
              "Mongodb",
              "Node.js",
              "Nosql",
              "React",
              "Redux",
              "Restful API",
              "Typescript",
            ]}
          />

          <Project
            title="Todo"
            github="https://github.com/joshgoss/todo-client"
            url={"https://todo.joshgoss.com"}
            description="A simple todo application"
            imageUrl="/todo.png"
            techStack={[
              "Fastapi",
              "JWT Authentication",
              "Postgresql",
              "Python",
              "React",
              "Redux",
              "Redis",
              "Restful API",
            ]}
          />

          <Project
            title="Feed Mailer"
            github="https://github.com/joshgoss/feed-mailer"
            description="A commandline application to email rss feeds"
            imageUrl="/feedmailer.png"
            techStack={["Python", "CLI", "SQLite"]}
          />

          <Project
            title="Personal Site"
            github="https://github.com/joshgoss/personal-site"
            url={"https://joshgoss.com"}
            description="This website."
            imageUrl="/personal-site.png"
            techStack={["Next.js", "React", "Tailwind CSS", "Typescript"]}
          />

          <Project
            title="Stopwatch"
            github="https://github.com/joshgoss/stopwatch"
            url={"https://stopwatch.joshgoss.com"}
            description="A simple stopwatch application"
            imageUrl="/stopwatch.png"
            techStack={["Javascript", "HTML", "CSS"]}
          />
        </div>
      </section>
    </>
  );
}
