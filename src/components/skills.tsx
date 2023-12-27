import { Badge } from "@/components/ui/badge";
import { type ResumeData } from "@/data/resume-data";
import React from "react";

interface SkillProps {
  skills: ResumeData["skills"];
}

export const Skills: React.FC<SkillProps> = ({ skills }) => {
  return (
    <>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </>
  );
};
