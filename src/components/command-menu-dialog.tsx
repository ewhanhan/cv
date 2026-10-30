import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

export type CommandMenuDialogProps = {
  links: { url: string; title: string }[];
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export const CommandMenuDialog = ({
  links,
  isOpen,
  onOpenChange,
}: CommandMenuDialogProps) => {
  return (
    <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() => {
              onOpenChange(false);
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
                onOpenChange(false);
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
  );
};
