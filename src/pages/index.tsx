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
      <header className="border-b border-gray-150">
        <div className="container md:mx-auto max-w-[800px]">
          <div className="flex flex-col items-center pb-6 pt-4">
            <div>
              <span className="text-3xl">Joshua</span>
              <span className="text-3xl text-gray-500 ml-1">Goss</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Full Stack <span className="text-gray-300">/</span> Developer{" "}
              <span className="text-gray-300">/</span> Learner{" "}
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Aside */}
        <aside className="w-96 border-gray-150">
          {/* About */}
          <Header>About Me</Header>
          <Paragraph className="mb-6">
            I am a full stack developer with a passion for developing
            applications in Python and Javascript. If you are an employer
            developer looking to hire a full stack developer, checkout my{" "}
            <Link href="/resume.pdf" title="My Resume">
              resume
            </Link>
            .
          </Paragraph>

          <Hr />

          {/* Contact */}
          <Header>Contact Me</Header>
          <ul className="mx-4  text-xl text-gray-800">
            <li className="inline-block ml-2">
              <a href="mailto:josh@joshgoss.com">
                <FaEnvelope />
              </a>
            </li>
            <li className="inline-block ml-2">
              <a href="https://github.com/joshgoss">
                <FaGithub />
              </a>
            </li>
          </ul>
          <Hr />
        </aside>

        {/* Main */}
        <main className="grow md:border-r mb-5">
          <Header>My Projects</Header>

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
        </main>
      </div>
    </>
  );
}
