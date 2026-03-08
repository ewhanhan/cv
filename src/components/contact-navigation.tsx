'use client';

import type { ResumeData } from '@/data/resume-data';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import * as React from 'react';
import { ContactButton } from '@/components/contact-button';

type ContactNavigationProps = {
  location: ResumeData['location'];
  locationLink: ResumeData['locationLink'];
  email: ResumeData['contact']['email'];
  tel: ResumeData['contact']['tel'];
  social: ResumeData['contact']['social'];
};

export const ContactNavigation: React.FC<ContactNavigationProps> = ({
  location,
  locationLink,
  email,
  tel,
  social,
}) => (
  <nav className="space-y-1.5" aria-label="Contact information and links">
    <address className="not-italic">
      {/* Location - always visible */}
      <p
        className={`
          max-w-md items-center font-mono text-xs text-pretty
          text-muted-foreground
        `}
      >
        <a
          className={`
            inline-flex gap-x-1.5 align-baseline leading-none
            hover:underline
          `}
          href={locationLink}
          target="_blank"
          aria-label="View my location on google maps"
        >
          <GlobeIcon className="size-3" />
          {location}
        </a>
      </p>

      {/* Contact links - screen view (icons) */}
      <div
        className={`
          flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground
          print:hidden
        `}
        aria-label="Contact and social links"
      >
        {email && (
          <ContactButton
            href={`mailto:${email}`}
            ariaLabel={`External link to email: ${email}`}
            icon={MailIcon}
          />
        )}
        {tel && (
          <ContactButton
            href={`tel:${tel}`}
            ariaLabel={`External link to phone: ${tel}`}
            icon={PhoneIcon}
          />
        )}
        {social.map(socialItem => (
          <ContactButton
            key={socialItem.name}
            href={socialItem.url}
            ariaLabel={`External link that opens ${socialItem.name}: ${socialItem.url}`}
            icon={socialItem.icon}
          />
        ))}
      </div>

      {/* Contact links - print view (text) */}
      <div
        className={`
          hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground
          print:flex
        `}
      >
        {email && (
          <a href={`mailto:${email}`} aria-hidden="true">
            <span>{email}</span>
          </a>
        )}
        {tel && (
          <a href={`tel:${tel}`} aria-hidden="true">
            <span>{tel}</span>
          </a>
        )}
        {social.map(socialItem => (
          <a key={socialItem.name} href={socialItem.url} aria-hidden="true">
            <span>
              {socialItem.name}: {socialItem.url}
            </span>
          </a>
        ))}
      </div>
    </address>
  </nav>
);
