import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaGlobe, FaList } from "react-icons/fa";
import classNames from "classnames";

type Props = {
  description: string;
  github: string;
  imageUrl: string;
  techStack: string[];
  title: string;
  url?: string;
};

const Project = ({
  description,
  github,
  imageUrl,
  techStack,
  title,
  url,
}: Props) => {
  const [showTechStack, setShowTechStack] = useState(false);
  return (
    <div className="border border-gray-300 w-full md:w-64 relative pb-7 bg-gray-100">
      <Image
        className="border-b border-gray-300 h-48 w-full md:w-64"
        src={imageUrl}
        alt={title}
        width={288}
        height={192}
      />
      <h4 className="font-bold mt-2 mb-1 mx-2 text-sm ">
        <a href={url || "#"} title={title}>
          {title}
        </a>
      </h4>
      <p className="text-sm text-gray-500 mb-3 mx-2">{description}</p>

      <div className="block mx-2 mb-1 absolute bottom-0 left-0">
        <a
          className="inline-block mr-1 text-lg p-1"
          href={github}
          title="View source code"
        >
          <FaGithub />
        </a>
        {!!url && (
          <a
            className="text-lg inline-block mr-1 p-1"
            href={url}
            title={`Try out ${title} app`}
          >
            <FaGlobe />
          </a>
        )}

        {!!techStack && (
          <a
            className={classNames(
              "text-lg inline-block mr-2 p-1",
              showTechStack && "bg-gray-300"
            )}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowTechStack(!showTechStack);
            }}
            title={showTechStack ? "Hide tech stack" : "Show tech stack"}
          >
            <FaList />
          </a>
        )}
      </div>

      {showTechStack && (
        <ul className="list-disc ml-6 mb-3 block">
          {techStack.map((t) => (
            <li key={t} className="text-xs text-gray-500">
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Project;
