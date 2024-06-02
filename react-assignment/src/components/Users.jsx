import React from 'react'
import { userinfo } from '../constants'
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/users/${id}`);
      };
  return (
    <div className=' bg-neutral-100 py-10'>
        <div className='flex justify-center flex-col px-7 py-6 shadow-xl mx-auto max-w-[1280px] bg-white'>
            <div>
            <h1 className='text-4xl font-semibold pb-5'>Users</h1>
            </div>
            <div className='rounded-md overflow-hidden'>
          <table className='w-full'>
            <thead>
              <tr className='border px-5 bg-gray-100'>
                <th className='py-5'>First Name</th>
                <th className=''>Last Name</th>
                <th className=''>Age</th>
                <th className=''>Email</th>
                <th className=''>Web</th>
              </tr>
            </thead>
            <tbody>
              {userinfo.map((user) => (
                <tr key={user.id} className=' border'>
                  <td 
                    onClick={() => handleClick(user.id)} 
                    className='pl-2 py-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer'>
                    {user.first_name}
                  </td>
                  <td className=''>{user.last_name}</td>
                  <td className=''>{user.age}</td>
                  <td className=''>{user.email}</td>
                  <td className=' text-blue-500 underline hover:text-blue-800 hover:bg-gray-200 cursor-pointer'><a href={user.web} target='_blank' >{user.web}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        </div>
    </div>
  )
}

export default Users