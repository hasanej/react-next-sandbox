'use client'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserListState, selectUserListState } from 'src/app/store/userListSlice';
import { dashboardService } from 'src/app/services';

export default function Dashboard() {
  let userData;

  const userListState = useSelector(selectUserListState);
  const dispatch = useDispatch();

  if (typeof window !== 'undefined') {
    userData = JSON.parse(localStorage.getItem("userData"));
  }

  useEffect(() => {
    getUserList();
  });

  function getUserList() {
    dashboardService.getUserList()
      .then((userList) => {
        dispatch(setUserListState(userList));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='min-h-screen'>
      Welcome to Dashboard
    </div>
  );
}