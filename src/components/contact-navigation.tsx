import type { ComponentType } from 'react';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { ContactButton } from '@/components/contact-button';

type SocialItem = {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
};

type ContactNavigationProps = {
  location: string;
  locationLink: string;
  email: string;
  tel: string;
  social: readonly SocialItem[];
};

export function ContactNavigation({
  location,
  locationLink,
  email,
  tel,
  social,
}: ContactNavigationProps) {
  return (
    <nav className="space-y-1.5" aria-label="Contact information and links">
      <address className="not-italic">
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

        <div
          className={`
            flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground
            print:hidden
          `}
          aria-label="Contact and social links"
        >
          {email
            ? (
                <ContactButton
                  href={`mailto:${email}`}
                  ariaLabel={`External link to email: ${email}`}
                  icon={MailIcon}
                />
              )
            : null}
          {tel
            ? (
                <ContactButton
                  href={`tel:${tel}`}
                  ariaLabel={`External link to phone: ${tel}`}
                  icon={PhoneIcon}
                />
              )
            : null}
          {social.map(socialItem => (
            <ContactButton
              key={socialItem.name}
              href={socialItem.url}
              ariaLabel={`External link that opens ${socialItem.name}: ${socialItem.url}`}
              icon={socialItem.icon}
            />
          ))}
        </div>

        <div
          className={`
            hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground
            print:flex
          `}
        >
          {email
            ? (
                <a href={`mailto:${email}`} aria-hidden="true">
                  <span>{email}</span>
                </a>
              )
            : null}
          {tel
            ? (
                <a href={`tel:${tel}`} aria-hidden="true">
                  <span>{tel}</span>
                </a>
              )
            : null}
          {social.map(socialItem => (
            <a key={socialItem.name} href={socialItem.url} aria-hidden="true">
              <span>
                {socialItem.name}
                :
                {socialItem.url}
              </span>
            </a>
          ))}
        </div>
      </address>
    </nav>
  );
}
