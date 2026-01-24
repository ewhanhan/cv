'use client';

import type { ResumeData } from '@/data/resume-data';
import * as React from 'react';
import { PersonalInfo } from '@/components/personal-info';
import { ProfileAvatar } from '@/components/profile-avatar';

type ResumeHeaderProps = {
  name: ResumeData['name'];
  initials: ResumeData['initials'];
  about: ResumeData['about'];
  location: ResumeData['location'];
  locationLink: ResumeData['locationLink'];
  avatarUrl: ResumeData['avatarUrl'];
  contact: ResumeData['contact'];
};

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  name,
  initials,
  about,
  location,
  locationLink,
  avatarUrl,
  contact,
}) => (
  <header className="flex items-center justify-between">
    <PersonalInfo
      name={name}
      about={about}
      location={location}
      locationLink={locationLink}
      contact={contact}
    />
    <ProfileAvatar
      name={name}
      avatarUrl={avatarUrl}
      initials={initials}
    />
  </header>
);
