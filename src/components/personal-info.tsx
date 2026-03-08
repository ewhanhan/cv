'use client';

import type { ResumeData } from '@/data/resume-data';
import * as React from 'react';
import { ContactNavigation } from '@/components/contact-navigation';

type PersonalInfoProps = {
  name: ResumeData['name'];
  about: ResumeData['about'];
  location: ResumeData['location'];
  locationLink: ResumeData['locationLink'];
  contact: ResumeData['contact'];
};

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  about,
  location,
  locationLink,
  contact,
}) => (
  <div className="flex-1 space-y-1.5">
    <h1 className="text-2xl font-bold">{name}</h1>
    {about && (
      <p
        className={`
          max-w-md font-mono text-sm text-pretty text-muted-foreground
        `}
      >
        {about}
      </p>
    )}
    <ContactNavigation
      location={location}
      locationLink={locationLink}
      email={contact.email}
      tel={contact.tel}
      social={contact.social}
    />
  </div>
);
