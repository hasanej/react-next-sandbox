'use client'

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { dashboardService } from 'src/app/services';

export default function Dashboard() {
  const router = useRouter();
  const [userList, setUserList] = useState([]);

  let userData;

  useEffect(() => {
    getUserList();
  });

  if (typeof window !== 'undefined') {
    userData = JSON.parse(localStorage.getItem("userData"));
  }

  function getUserList() {
    dashboardService.getUserList()
      .then((response) => {
        setUserList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='min-h-screen'>
      <div className='h-56 grid grid-cols-3 gap-4 content-start'>
        {
          userList.map(user => (
            <div key={user.id}>
              {user.name}
            </div>
          ))
        }
      </div>
    </div>
  );
}