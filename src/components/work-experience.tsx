"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type ResumeData } from "@/data/resume-data";
import React from "react";

interface WorkExperienceProps {
  workExperience: ResumeData["work"];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({
  workExperience,
}) => {
  return (
    <>
      <h2 className="text-xl font-bold">Work Experience</h2>
      {workExperience.map((work) => {
        return (
          <Card key={work.company}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a
                    className="hover:underline"
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`External link that opens in a new tab: ${work.company}`}
                  >
                    {work.company}
                  </a>

                  <span className="inline-flex gap-x-1">
                    {work.badges.map((badge) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={badge}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  {work.start} - {work.end}
                </div>
              </div>

              <h4 className="font-mono text-sm leading-none">{work.title}</h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
              {work.description}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
