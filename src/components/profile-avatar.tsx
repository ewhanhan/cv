import Image from 'next/image';
import avatar from '@/data/images/Avatar.png';

type ProfileAvatarProps = {
  name: string;
};

export function ProfileAvatar({ name }: ProfileAvatarProps) {
  return (
    <Image
      className="size-28 shrink-0 rounded-xl object-cover"
      src={avatar}
      alt={name}
      sizes="112px"
      loading="eager"
    />
  );
}
