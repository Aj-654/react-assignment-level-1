import React from 'react'
import { userinfo } from '../constants'
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const user = userinfo.find(user => user.id === id);

    const handleClick = () => {
      navigate('/')
    };
  
    if (!user) {
      return <div>User not found</div>;
    }
  
    return (
      <div className='bg-neutral-100 py-10 px-10'>
        <div className='flex justify-center flex-col px-7 py-6 shadow-xl mx-auto max-w-[800px] bg-white'>
          <div className='flex flex-row justify-start items-center pb-5'>
            <button className=''>
              <img onClick={handleClick} src='/assets/back.png' width={40} alt='back'/>
            </button>
            <h1 className='pl-2 text-4xl font-semibold'>Details: <span>{user.first_name} {user.last_name}</span></h1>
          </div>
          <div className='rounded-xl overflow-hidden p-5'>
            <p className='py-3 border-b'>Last Name: <strong>{user.last_name}</strong></p>
            <p className='py-3 border-b'>Age: <strong>{user.age}</strong></p>
            <p className='py-3 border-b'>First Name: <strong>{user.first_name}</strong></p>
            <p className='py-3 border-b'>Email: <strong>{user.email}</strong></p>
            <p className='py-3 border-b'>Website: <strong>{user.web}</strong></p>
            <p className='py-3 border-b'>Company Name: <strong>{user.company_name}</strong></p>
            <p className='py-3 border-b'>City: <strong>{user.city}</strong></p>
            <p className='py-3 border-b'>State: <strong>{user.state}</strong></p>
            <p className='py-3'>ZIP: <strong>{user.zip}</strong></p>
          </div>
        </div>
      </div>
  )
}

export default UserDetails