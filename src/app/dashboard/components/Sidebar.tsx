import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

import { DefaultNavItems } from './DefaultNavItems';

type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};

const Sidebar = ({
  collapsed,
  navItems = DefaultNavItems,
  setCollapsed
}: Props) => {
  // Use the correct icon depending on the state
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  
  return (
    <div
      className={classNames({
        'bg-sky-500 text-zinc-50 z-20': true
      })}
    >
      <div
        className={classNames({
          'flex flex-col justify-between': true
        })}
      >
        {/* Logo and collapse button */}
        <div
          className={classNames({
            'flex items-center border-b border-b-white': true,
            'p-4 justify-between': !collapsed,
            'py-4 justify-center': collapsed
          })}
        >
          {!collapsed && <span className='whitespace-nowrap'>Dashboard Sandbox</span>}
          <button
            className={classNames({
              'grid place-content-center': true, // Position
              'hover:bg-sky-800 ': true, // Colors
              'w-10 h-10 rounded-full': true, // Shape
            })}
            // Set the collapsed state on click
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className='w-5 h-5' />
          </button>
        </div>

        {/* Nav items part */}
        <nav className='flex-grow'>
          <ul
            className={classNames({
              'my-2 flex flex-col gap-2 items-stretch': true
            })}
          >
            {
              navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classNames({
                      'text-indigo-100 hover:bg-sky-800 flex': true, // Colors
                      'transition-colors duration-300': true, // Animation
                      'rounded-md p-2 mx-3 gap-4 ': !collapsed,
                      'rounded-full p-2 mx-3 w-10 h-10': collapsed
                    })}
                  >
                    <Link href={item.href} className='flex gap-2'>
                      {item.icon} <span>{!collapsed && item.label}</span>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;