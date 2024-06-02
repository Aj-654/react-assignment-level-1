import React from 'react'
import { userinfo } from '../constants'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const user = userinfo.find(user => user.id === id);
  
    if (!user) {
      return <div>User not found</div>;
    }
  
    return (
      <div className='flex justify-center px-5 mx-auto max-w-[1366px] flex-col h-full'>
        <div>
          <h1 className='text-4xl font-semibold  my-10'>User Details</h1>
        </div>
        <div className='shadow-xl rounded-xl overflow-hidden p-5'>
          <p><strong>First Name:</strong> {user.first_name}</p>
          <p><strong>Last Name:</strong> {user.last_name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Website:</strong> {user.web}</p>
          <p><strong>Company Name:</strong> {user.company_name}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>State:</strong> {user.state}</p>
          <p><strong>ZIP:</strong> {user.zip}</p>
        </div>
      </div>
  )
}

export default UserDetails