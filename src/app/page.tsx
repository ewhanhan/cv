import type { Metadata } from 'next';
import { About } from '@/components/about';
import { CommandMenu } from '@/components/command-menu';
import { Education } from '@/components/education';
import { PersonalInfo } from '@/components/personal-info';
import { ProfileAvatar } from '@/components/profile-avatar';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Header } from '@/components/ui/header';
import { Section } from '@/components/ui/section';
import { WorkExperience } from '@/components/work-experience';
import { RESUME_DATA } from '@/data/resume-data';

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="relative container mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <div className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Header>
          <PersonalInfo
            name={RESUME_DATA.name}
            about={RESUME_DATA.about}
            location={RESUME_DATA.location}
            locationLink={RESUME_DATA.locationLink}
            contact={RESUME_DATA.contact}
          />
          <ProfileAvatar
            name={RESUME_DATA.name}
            avatarUrl={RESUME_DATA.avatarUrl}
            initials={RESUME_DATA.initials}
          />
        </Header>

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
      </div>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: 'Personal Website',
          },
          ...RESUME_DATA.contact.social.map(socialMediaLink => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
