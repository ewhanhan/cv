import { cn } from '@/lib/utils';

export type HeaderProps = {} & React.HTMLAttributes<HTMLElement>;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn('flex items-center justify-between', className)}
      {...props}
    />
  );
}
