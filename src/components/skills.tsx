'use client';

import type { ResumeData } from '@/data/resume-data';
import * as React from 'react';
import { Fragment } from 'react';
import { Badge } from '@/components/ui/badge';

type SkillProps = {
  skills: ResumeData['skills'];
};

export const Skills: React.FC<SkillProps> = ({ skills }) => {
  return (
    <Fragment>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </Fragment>
  );
};
