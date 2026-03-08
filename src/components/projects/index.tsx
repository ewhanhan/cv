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

export function Projects({ projects }: ProjectsProps) {
  return (
    <>
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
    </>
  );
}
