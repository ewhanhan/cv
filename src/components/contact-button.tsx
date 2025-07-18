'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

type ContactButtonProps = {
  href: string;
  ariaLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
};

export const ContactButton: React.FC<ContactButtonProps> = ({
  href,
  ariaLabel,
  icon: Icon,
  children,
}) => (
  <Button
    asChild
    className="h-8 w-8"
    variant="outline"
    size="icon"
  >
    <a href={href} aria-label={ariaLabel}>
      <Icon className="h-4 w-4" />
      {children}
    </a>
  </Button>
);
