'use client'

import { useEffect } from 'react';

import { update } from 'src/app/redux/features/userListSlice';
import { useAppDispatch } from 'src/app/redux/hooks';

import { dashboardService } from 'src/app/services';

export default function Dashboard() {
  let userData;

  const dispatch = useAppDispatch();

  if (typeof window !== 'undefined') {
    userData = JSON.parse(localStorage.getItem("userData"));
  }

  useEffect(() => {
    getUserList();
  });

  function getUserList() {
    dashboardService.getUserList()
      .then((userList) => {
        dispatch(update(userList));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <p className='text-2xl text-sky-500'>Welcome to Dashboard</p>
    </div>
  );
}