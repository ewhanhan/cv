import { cn } from '@/lib/utils';

export type SectionProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn('flex min-h-0 flex-col gap-y-3', className)}
      {...props}
    />
  );
}
