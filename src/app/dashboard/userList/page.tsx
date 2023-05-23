'use client'

import { useSelector } from 'react-redux';

'use client'

import { useSelector } from 'react-redux';
import { selectUserListState } from 'src/app/store/userListSlice';

export default function Dashboard() {
  const userListState = useSelector(selectUserListState);

  return (
    <div className='min-h-screen'>
      <div className='h-56 grid grid-cols-3 gap-4 content-start'>
        {
          userListState.map(user => (
            <div key={user.id}>
              {user.name}
            </div>
          ))
        }
      </div>
    </div>
  );
}