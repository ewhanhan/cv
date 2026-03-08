import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ProfileAvatarProps = {
  name: string;
  avatarUrl: string;
  initials: string;
};

export function ProfileAvatar({
  name,
  avatarUrl,
  initials,
}: ProfileAvatarProps) {
  return (
    <Avatar className="size-28">
      <AvatarImage alt={name} src={avatarUrl} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
