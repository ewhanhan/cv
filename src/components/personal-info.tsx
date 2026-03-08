'use client';

import * as React from 'react';
import { ContactNavigation } from '@/components/contact-navigation';

type SocialItem = {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
};

type PersonalInfoProps = {
  name: string;
  about: string;
  location: string;
  locationLink: string;
  contact: {
    email: string;
    tel: string;
    social: readonly SocialItem[];
  };
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
    {about
      ? (
          <p
            className={`
              max-w-md font-mono text-sm text-pretty text-muted-foreground
            `}
          >
            {about}
          </p>
        )
      : null}
    <ContactNavigation
      location={location}
      locationLink={locationLink}
      email={contact.email}
      tel={contact.tel}
      social={contact.social}
    />
  </div>
);
