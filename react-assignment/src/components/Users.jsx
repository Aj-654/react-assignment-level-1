import React, { useState } from 'react';
import { userinfo } from '../constants';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();
  //to navigate to users details page
  const handleClick = (id) => {
    navigate(`/users/${id}`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Logic for pagination
  const totalPages = Math.ceil(userinfo.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userinfo.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? prev : prev + 1));
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`border rounded-sm px-4 py-2 mx-1 ${currentPage === i ? 'border-blue-500 text-blue-500' : 'border-gray-200'}`}
          >
            {i}
          </button>
        );
      }
    } else {
      let startPage = Math.max(2, currentPage - 2);
      let endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`border rounded-sm px-4 py-2 mx-1 ${currentPage === i ? 'border-blue-500 text-blue-500' : 'border-gray-200'}`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(<span key="end-ellipsis" className="px-4 py-2 mx-1">...</span>);
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`border rounded-sm px-4 py-2 mx-1 ${currentPage === totalPages ? 'border-blue-500 text-blue-500' : 'border-gray-200'}`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className='bg-neutral-100 py-10'>
      <div className='flex justify-center flex-col px-7 py-6 shadow-xl mx-auto max-w-[1280px] bg-white'>
        <div>
          <h1 className='text-4xl font-semibold pb-5'>Users</h1>
        </div>
        <div className='rounded-md overflow-hidden'>
          <table className='w-full'>
            <thead>
              <tr className='border px-5 text-left bg-gray-100'>
                <th className='py-5 pl-2'>First Name</th>
                <th className=''>Last Name</th>
                <th className=''>Age</th>
                <th className=''>Email</th>
                <th className=''>Web</th>
                
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} className='border'>
                  <td 
                    onClick={() => handleClick(user.id)} 
                    className='pl-2 py-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer'>
                    {user.first_name}
                  </td>
                  <td className=''>{user.last_name}</td>
                  <td className=''>{user.age}</td>
                  <td className=''>{user.email}</td>
                  <td className=' text-blue-500 underline hover:text-blue-800 hover:bg-gray-200 cursor-pointer'><a href={user.web} target='_blank' rel='noreferrer' >{user.web}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-end my-5'>
          <button onClick={handlePrevious} className='border border-gray-300 hover:bg-gray-600 hover:text-white rounded-sm px-4 py-2 mx-1 bg-gray-200' disabled={currentPage === 1}>
            &lt; 
          </button>
          {renderPageNumbers()}
          <button onClick={handleNext} className='border border-gray-300 hover:bg-gray-600 hover:text-white rounded-sm px-4 py-2 mx-1 bg-gray-200' disabled={currentPage === totalPages}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Users;
