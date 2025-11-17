
import React from 'react';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './IconComponents';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <section className="animate-fade-in">
      <div className="mb-8">
        <a
          href="/#"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform group-hover:-translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back to Portfolio</span>
        </a>
      </div>
      <article className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700/50">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-indigo-500/20 text-indigo-300 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gray-700/50 hover:bg-gray-700 rounded-md transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-900 bg-indigo-400 hover:bg-indigo-300 rounded-md transition-all duration-300"
              >
                <ExternalLinkIcon className="w-5 h-5" />
                <span>View Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectDetail;