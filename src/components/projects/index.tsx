'use client';

import type { ResumeData } from '@/data/resume-data';
import * as React from 'react';
import { Fragment } from 'react';
import { ProjectCard } from '@/components/projects/project-card';

type ProjectsProps = {
  projects: ResumeData['projects'];
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
              link={'link' in project ? project.link.href : undefined}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
