'use client';

import type { CommandMenuDialogProps } from '@/components/command-menu-dialog';
import dynamic from 'next/dynamic';
import * as React from 'react';

// `ssr: false` is only valid in a Client Component, and dynamic() called from a
// Server Component is not code-split, so the dialog is split off here.
const CommandMenuDialog = dynamic(
  () =>
    import('@/components/command-menu-dialog').then(
      mod => mod.CommandMenuDialog,
    ),
  { ssr: false },
);

type CommandMenuProps = Pick<CommandMenuDialogProps, 'links'>;

// 'closed' (not 'unopened') keeps the dialog mounted so the close animation plays.
type DialogState = 'unopened' | 'open' | 'closed';

export const CommandMenu = ({ links }: CommandMenuProps) => {
  const [dialogState, setDialogState] = React.useState<DialogState>('unopened');

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setDialogState(prev => (prev === 'open' ? 'closed' : 'open'));
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Warm the chunk off the critical path so the first open is instant.
  React.useEffect(() => {
    const preloadDialog = () => {
      void import('@/components/command-menu-dialog');
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(preloadDialog);
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = setTimeout(preloadDialog, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    setDialogState(isOpen ? 'open' : 'closed');
  };

  return (
    <>
      <p
        className={`
          fixed inset-x-0 bottom-0 border-t border-t-muted bg-white p-1
          text-center text-sm text-muted-foreground
          print:hidden
        `}
      >
        Press
        {' '}
        <kbd
          className={`
            pointer-events-none inline-flex h-5 items-center gap-1 rounded-sm
            border bg-muted px-1.5 font-mono text-[10px] font-medium
            text-muted-foreground opacity-100 select-none
          `}
        >
          <span className="text-xs">⌘</span>
          J
        </kbd>
        {' '}
        to open the command menu
      </p>
      {dialogState === 'unopened'
        ? null
        : (
            <CommandMenuDialog
              links={links}
              isOpen={dialogState === 'open'}
              onOpenChange={handleOpenChange}
            />
          )}
    </>
  );
};
