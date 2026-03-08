'use client';

import * as React from 'react';
import { Fragment } from 'react';
import { ProjectCard } from '@/components/projects/project-card';

type ProjectItem = {
  title: string;
  description: string;
  techStack: readonly string[];
  link: { href: string };
};

type ProjectsProps = {
  projects: readonly ProjectItem[];
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Fragment>
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link.href}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
