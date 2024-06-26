import { About } from "@/components/about";
import { CommandMenu } from "@/components/command-menu";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { WorkExperience } from "@/components/work-experience";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
                aria-label="View my location on google maps"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  aria-label={`External link to email: ${RESUME_DATA.contact.email}`}
                >
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    aria-label={`Open email client with: ${RESUME_DATA.contact.email}`}
                  >
                    <MailIcon className="h-4 w-4" />
                  </Button>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a
                  href={`tel:${RESUME_DATA.contact.tel}`}
                  aria-label={`External link to phone: ${RESUME_DATA.contact.tel}`}
                >
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    aria-label={`Open phone app with: ${RESUME_DATA.contact.tel}`}
                  >
                    <PhoneIcon className="h-4 w-4" />
                  </Button>
                </a>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  aria-label={`External link that opens ${social.name}`}
                >
                  <a
                    href={social.url}
                    aria-label={`External link that opens ${social.name}: ${social.url}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  aria-hidden="true"
                >
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`} aria-hidden="true">
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section>
          <About summary={RESUME_DATA.summary} />
        </Section>

        <Section>
          <WorkExperience workExperience={RESUME_DATA.work} />
        </Section>
        <Section>
          <Education education={RESUME_DATA.education} />
        </Section>

        <Section>
          <Skills skills={RESUME_DATA.skills} />
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <Projects projects={RESUME_DATA.projects} />
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
