import { ResumeData } from "@/data/resume-data";
import React from "react";

interface AboutProps {
  summary: ResumeData["summary"];
}

export const About: React.FC<AboutProps> = ({ summary }) => (
  <>
    <h2 className="text-xl font-bold">About</h2>
    <p className="text-pretty font-mono text-sm text-muted-foreground">
      {summary}
    </p>
  </>
);
