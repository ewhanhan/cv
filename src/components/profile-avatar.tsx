'use client';

import type { ResumeData } from '@/data/resume-data';
import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ProfileAvatarProps = {
  name: ResumeData['name'];
  avatarUrl: ResumeData['avatarUrl'];
  initials: ResumeData['initials'];
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
