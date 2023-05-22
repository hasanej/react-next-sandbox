// components/Sidebar.tsx
import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

import { defaultNavItems, NavItem } from './defaultNavItems';

// 👇 props to get and set the collapsed state from parent component
type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};

const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  setCollapsed
}: Props) => {
  // 👇 use the correct icon depending on the state.
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  
  return (
    <div
      className={classNames({
        'bg-sky-500 text-zinc-50 z-20': true,
      })}
    >
      <div
        className={classNames({
          'flex flex-col justify-between': true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            'flex items-center border-b border-b-white': true,
            'p-4 justify-between': !collapsed,
            'py-4 justify-center': collapsed,
          })}
        >
          {!collapsed && <span className='whitespace-nowrap'>Dashboard Sandbox</span>}
          <button
            className={classNames({
              'grid place-content-center': true, // position
              'hover:bg-sky-800 ': true, // colors
              'w-10 h-10 rounded-full': true, // shape
            })}
            // 👇 set the collapsed state on click
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className='w-5 h-5' />
          </button>
        </div>

        {/* nav items part */}
        <nav className="flex-grow">
          <ul
            className={classNames({
              "my-2 flex flex-col gap-2 items-stretch": true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-indigo-100 hover:bg-sky-800 flex": true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                  <Link href={item.href} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;