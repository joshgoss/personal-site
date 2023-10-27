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
      <header className="border-b border-gray-300 p-3 bg-white">
        <span className="text-xl text-gray-700 ml-2">Joshua </span>
        <span className="text-xl text-gray-500">Goss</span>
      </header>

      <section className="border-b border-gray-300 bg-white pt-3  pb-8 px-4">
        <h1 className="text-4xl text-gray-800 ml-6 pt-3 mb-4">
          <span className="block">Hi,</span>
          <span className="text-red-500 block">I&apos;m Josh,</span>
          <span className="block">Full Stack Developer</span>
        </h1>
        <p className="text-gray-500 ml-6">
          I&apos;m a Full Stack Developer with 4+ years of experience. I&apos;m
          well-versed in a range of technologies, including Python and Node.js
          for backend development, React for creating engaging frontends, and
          HTML/CSS for crafting polished interfaces. My passion lies in
          transforming ideas into functional, user-friendly web applications.
        </p>

        <div className="text-gray-500 ml-10 mt-5 mb-3 ">
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
      <section className="border-b  border-gray-300 bg-gray-100">
        <h2 className="text-gray-700 ml-4 mb-5 text-lg pt-3">My Skills</h2>

        <div className="flex gap-4 ml-6 pb-5 mr-4 flex-col md:flex-row">
          <div className="flex  flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-desktop text-[44px] mr-4 text-gray-600" />
            <div>
              <h3 className="font-bold  mb-1 w-32 text-gray-600">Full Stack</h3>
              <p className="text-gray-500 text-sm">
                With over 4 years in Full Stack Development, I&apos;m skilled in
                Python, Node.js, React, HTML, and CSS. From backend to frontend,
                I create seamless web experiences.
              </p>
            </div>
          </div>
          <div className="flex flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-brands fa-python text-[57px] mr-4 text-gray-600" />
            <div>
              <h3 className="font-bold  mb-1 text-gray-600">Python</h3>
              <p className="text-gray-500 text-sm">
                I&apos;ve leveraged Python&apos;s capabilities to build
                efficient backends using Flask and FastAPI. This include complex
                RESTful backend APIs using SQLAlchemy for database interactions
                and custom permissions for endpoints.
              </p>
            </div>
          </div>
          <div className="flex  flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-brands fa-node-js text-[57px]  mr-4 text-gray-600" />
            <div>
              <h3 className="font-bold  mb-1 text-gray-600">Node.JS</h3>
              <p className="text-gray-500 text-sm">
                Significant experience creating RESTful Node.js APIs and custom
                scripts for data processing or integrating with cloud services.
              </p>
            </div>
          </div>
          <div className="flex flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-brands fa-react text-[50px] mr-4  text-gray-600" />
            <div>
              <h3 className="font-bold  mb-1  text-gray-600">React</h3>
              <p className="text-gray-500 text-sm">
                I bring a solid four years of expertise in React development to
                the table, during which I&apos;ve honed my skills in crafting
                exceptional user interfaces and optimizing overall user
                experiences. My passion for web development, coupled with my
                in-depth knowledge of React, allows me to create dynamic and
                engaging applications that meet both user and business needs.
              </p>
            </div>
          </div>
          <div className="flex flex-initial lg:w-80 w-full ml-3">
            <i className="fa fa-cloud text-[40px] mr-4  text-gray-600" />
            <div>
              <h3 className="font-bold  mb-1  text-gray-600">Cloud Services</h3>
              <p className="text-gray-500 text-sm">
                Experience with hosting front-end and backend on AWS and Azure
                and integrating their servies. This includes AWS EC2, AWS S3,
                AWS SQS, Azur Blob Storage and Azure App Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-700 pb-8 border-b border-gray-800">
        <div className="flex flex-row flex-wrap gap-3 mx-4">
          <h2 className="text-lg text-gray-200 pt-3 mb pb-3 block w-full">
            Credentials
          </h2>
          <a
            href="https://www.credly.com/badges/6e78150f-4dec-434c-a50e-7da928c291f6/public_url"
            title="AWS Developer Associate Certification"
            target="_blank"
          >
            <Image
              src="/aws-cert.png"
              alt="AWS Developer Associate Certification "
              width={204}
              height={204}
            />
          </a>

          <a
            href="https://www.credly.com/badges/f303b3ee-4914-4dc1-9730-13b02cd2ce57/public_url"
            title="Python Essentials"
            target="_blank"
          >
            <Image
              src="/python-essentials.png"
              alt="Python Esstentials"
              width={204}
              height={204}
            />
          </a>

          <a
            href="https://www.credly.com/badges/59b99b90-1210-4824-922c-e075cf13c6df/public_url"
            title="Python for Data Science and AI"
            target="_blank"
          >
            <Image
              src="/python-data-ai.png"
              alt="Python for Data Science and AI"
              width={204}
              height={204}
            />
          </a>
        </div>
      </section>

      <section className="bg-gray-800 pb-8">
        <h2 className="text-lg ml-4 pt-2 mb pb-3 text-gray-200">Projects</h2>

        <div className="flex flex-row flex-wrap gap-3 mx-4">
          <Project
            title="Habit Tracker"
            github="https://github.com/joshgoss/habit-tracker"
            url={"https://habit-tracker.joshgoss.com"}
            description="A habit tracking application with support for tracking streaks."
            imageUrl="/habit-tracker.png"
            techStack={[
              "OAuth (Google & Github)",
              "Express",
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
            github="https://github.com/joshgoss/todo"
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
