import { Card, CardContent, CardHeader } from '@/components/ui/card';

type EducationItem = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

type EducationProps = {
  education: readonly EducationItem[];
};

export function Education({ education }: EducationProps) {
  return (
    <>
      <h2 className="text-xl font-bold">Education</h2>
      {education.map((education) => {
        return (
          <Card key={education.school + education.start}>
            <CardHeader>
              <div className="
                flex items-center justify-between gap-x-2 text-base
              "
              >
                <h3 className="leading-none font-semibold">
                  {education.school}
                </h3>
                <div className="text-sm text-gray-500 tabular-nums">
                  {education.start}
                  {' '}
                  -
                  {education.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">{education.degree}</CardContent>
          </Card>
        );
      })}
    </>
  );
}
