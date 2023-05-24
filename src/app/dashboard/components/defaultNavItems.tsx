import React from 'react';
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const DefaultNavItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <HomeIcon className='w-6 h-6' />
  },
  {
    label: 'User List',
    href: '/dashboard/userList',
    icon: <UserGroupIcon className='w-6 h-6' />
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: <FolderIcon className='w-6 h-6' />
  },
  {
    label: 'Calendar',
    href: '/calendar',
    icon: <CalendarIcon className='w-6 h-6' />
  }
];