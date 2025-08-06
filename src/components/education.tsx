'use client';

import type { ResumeData } from '@/data/resume-data';
import React, { Fragment } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type EducationProps = {
  education: ResumeData['education'];
};

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Fragment>
      <h2 className="text-xl font-bold">Education</h2>
      {education.map((education) => {
        return (
          <Card key={education.school + education.start}>
            <CardHeader>
              <div className={`
                flex items-center justify-between gap-x-2 text-base
              `}
              >
                <h3 className="leading-none font-semibold">
                  {education.school}
                </h3>
                <div className="text-sm text-gray-500 tabular-nums">
                  {education.start}
                  {' '}
                  -
                  {education.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">{education.degree}</CardContent>
          </Card>
        );
      })}
    </Fragment>
  );
};
