'use client';

import * as React from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

type CommandMenuProps = {
  links: { url: string; title: string }[];
};

export const CommandMenu = ({ links }: CommandMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

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
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setIsOpen(false);
                window.print();
              }}
            >
              <span>Print</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setIsOpen(false);
                  window.open(url, '_blank');
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
