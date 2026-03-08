import { Badge } from '@/components/ui/badge';

type SkillProps = {
  skills: readonly string[];
};

export function Skills({ skills }: SkillProps) {
  return (
    <>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </>
  );
}
