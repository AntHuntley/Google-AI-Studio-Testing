
import React from 'react';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './IconComponents';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, title, description, imageUrl, tags, githubUrl, liveUrl } = project;

  return (
    <div className="relative bg-gray-800/50 rounded-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-2 border border-gray-700/50 hover:border-indigo-500/50">
      <a
        href={`/#/project/${id}`}
        aria-label={`View details for ${title}`}
        className="absolute inset-0 z-10"
      ></a>

      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm flex-grow mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative z-20 mt-auto pt-4 border-t border-gray-700/50 flex items-center justify-end space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              aria-label="Live Demo"
            >
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;