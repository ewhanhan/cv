import type { ComponentType, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

type ContactButtonProps = {
  href: string;
  ariaLabel: string;
  icon: ComponentType<{ className?: string }>;
  children?: ReactNode;
};

export function ContactButton({
  href,
  ariaLabel,
  icon: Icon,
  children,
}: ContactButtonProps) {
  return (
    <Button asChild className="size-8" variant="outline" size="icon">
      <a href={href} aria-label={ariaLabel}>
        <Icon className="size-4" />
        {children}
      </a>
    </Button>
  );
}
