'use client'

import Image from 'next/image';
import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import { Bars3Icon, PowerIcon } from '@heroicons/react/24/outline';

import Sidebar from './components/Sidebar';

export default function DashboardLayout(props: PropsWithChildren) {
  let userData;
  const [collapsed, setSidebarCollapsed] = useState(false);

  if (typeof window !== 'undefined') {
    userData = JSON.parse(localStorage.getItem("userData"));
  }

  return (
    <div
      className={classNames({
        // 👇 Use grid layout
        'grid min-h-screen': true,
        // 👇 Toggle the width of the sidebar depending on the state
        'grid-cols-sidebar': !collapsed,
        'grid-cols-sidebar-collapsed': collapsed,
        // 👇 Transition animation classes
        'transition-[grid-template-columns] duration-300 ease-in-out': true,
      })}
    >
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
      />

      {/* Content */}
      <div >
        {/* Dashboard header */}
        <div className='bg-white p-3 flex flex-row min-w-full'>
          <Image
            className='rounded-full'
            src={userData.data.avatar}
            width={60}
            height={60}
            alt="User avatar"
          />

          <div className='my-auto ml-2'>
            <p className='text-black'>{userData?.data.first_name} {userData?.data.last_name}</p>
            <p className='text-sky-500'>{userData?.data.email}</p>
          </div>

          <div className='flex basis-full justify-end'>
            <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
              <PowerIcon className='w-8 h-8 text-red-500' />
            </button>
          </div>
        </div>

        {props.children}
      </div>
    </div>
  );
}