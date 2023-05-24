'use client'

import { useAppSelector } from 'src/app/redux/hooks';

export default function UserList() {
  const userList = useAppSelector((state) => state.userListReducer.value);

  return (
    <div className='min-h-screen'>
      <div className='h-56 grid grid-cols-3 gap-4 content-start p-3'>
        {
          userList.map(user => (
            <div key={user.id} className='bg-white p-2 rounded-md'>
              <p className='text-center text-black'>{user.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}