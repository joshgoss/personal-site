import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaGlobe, FaList } from "react-icons/fa";

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
    <div className="border border-gray-300 w-64 relative pb-7 bg-gray-100">
      <Image
        className="border-b border-gray-300 h-64 w-64"
        src={imageUrl}
        alt={title}
        width={288}
        height={288}
      />
      <h4 className="font-bold mt-2 mb-1 mx-2 text-sm ">
        <a href={url || "#"} title={title}>
          {title}
        </a>
      </h4>
      <p className="text-sm text-gray-500 mb-3 mx-2">{description}</p>

      <div className="block mx-2 mb-1 absolute bottom-0 left-0">
        <a
          className="inline-block mr-2 text-lg"
          href={github}
          title="View source code"
        >
          <FaGithub />
        </a>
        {!!url && (
          <a
            className="text-lg inline-block mr-2"
            href={url}
            title={`Try out ${title} app`}
          >
            <FaGlobe />
          </a>
        )}

        {!!techStack && (
          <a
            className="text-lg inline-block mr-2"
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
