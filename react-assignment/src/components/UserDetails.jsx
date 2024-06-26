import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch('https://react-assg1-backend.vercel.app/users');
          const data = await response.json();
          const userData = data.find(user => user.id === parseInt(id));
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
  
      fetchUser();
    }, [id]);

    const handleClick = () => {
      navigate('/')
    };
  
    if (!user) {
      return <div className='p-10'>Loading...</div>;
    }
  
    return (
      <div className='bg-neutral-100 py-10 px-10'>
        <div className='flex justify-center flex-col px-7 py-6  mx-auto max-w-[800px] bg-white'>
          <div className='flex flex-row justify-start items-center pb-5'>
            <button className='hover:bg-gray-300 rounded-full'>
              <img onClick={handleClick} src='../assets/back.png' width={40} alt='back'/>
            </button>
            <h1 className='pl-2 text-4xl font-semibold max-sm:text-2xl'>Details: <span>{user.first_name} {user.last_name}</span></h1>
          </div>
          <div className='rounded-xl overflow-hidden p-5 flex flex-col'>
            <p>First Name: <strong>{user.first_name}</strong></p>
            <p>Last Name: <strong>{user.last_name}</strong></p>
            <p>Company Name: <strong>{user.company_name}</strong></p>
            <p>City: <strong>{user.city}</strong></p>
            <p>State: <strong>{user.state}</strong></p>
            <p>Zip: <strong>{user.zip}</strong></p>
            <p>Email: <strong><a href={`mailto:${user.email}`}>{user.email}</a></strong></p>
            <p>Website: <strong><a className='underline' href={user.web} target='_blank' rel='noreferrer'>{user.web}</a></strong></p>
            <p className='border-none'>Age: <strong>{user.age}</strong></p>
          </div>
        </div>
      </div>
  )
}

export default UserDetails