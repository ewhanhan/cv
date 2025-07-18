'use client';

import type { ResumeData } from '@/data/resume-data';
import React from 'react';

type AboutProps = {
  summary: ResumeData['summary'];
};

export const About: React.FC<AboutProps> = ({ summary }) => (
  <>
    <h2 className="text-xl font-bold">About</h2>
    <p className="font-mono text-sm text-pretty text-muted-foreground">
      {summary}
    </p>
  </>
);
