'use client';

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ProfileAvatarProps = {
  name: string;
  avatarUrl: string;
  initials: string;
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  name,
  avatarUrl,
  initials,
}) => (
  <Avatar className="size-28">
    <AvatarImage alt={name} src={avatarUrl} />
    <AvatarFallback>{initials}</AvatarFallback>
  </Avatar>
);
