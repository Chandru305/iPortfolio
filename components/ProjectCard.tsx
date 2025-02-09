import React from "react";
import Link from "next/link";
import { project } from "@/types";
import { techDict } from "@/data";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const ProjectCard = ({
  name,
  description,
  imageSrc,
  techStack,
  gitLink,
  liveLink,
}: project) => {
  return (
    <div className="border-2 flex flex-col gap-4 w-full min-h-80 p-4 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      {/* Project Image */}
      <Image
        src={imageSrc}
        height={1000}
        width={2000}
        className="w-full h-fit rounded-md"
        alt={`${name}_cover_image`}
      />

      {/* Project Title and Links */}
      <div className="w-full flex justify-between items-center">
        <div className="font-bold tracking-wide">{name}</div>
        <div className="flex gap-2 items-center">
          {gitLink && (
            <Link href={gitLink} target="_blank" aria-label="GitHub Repository">
              <FaGithubSquare className="size-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" />
            </Link>
          )}
          {liveLink && (
            <Link href={liveLink} target="_blank" aria-label="Live Project">
              <FaExternalLinkSquareAlt className="size-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div className="text-justify tracking-wide">{description}</div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => {
          const techData = techDict[tech];
          if (!techData) return null;

          return (
            <Link
              href={techData.url}
              key={index}
              target="_blank"
              className="border-2 p-0.5 px-1.5 flex gap-2 items-center justify-center rounded-md tracking-wider text-sm font-bold cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              {techData.icon}
              <span>{tech}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
