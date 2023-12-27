"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { type ResumeData } from "@/data/resume-data";
import React from "react";

interface ProjectsProps {
  projects: ResumeData["projects"];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
            />
          );
        })}
      </div>
    </>
  );
};
