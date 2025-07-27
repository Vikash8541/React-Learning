import React, { useEffect, useState } from 'react';
import { userData } from "./Api";

const User = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await userData();
        // console.log(data); 
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle previous and next
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="p-6  min-h-screen pt-[130px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">User Directory</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our community members and discover talented professionals
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentUsers.map((single) => (
            <li 
              key={single.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-300/30 p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={single.image}
                    alt={single.firstName}
                    className="w-20 h-20 rounded-full border-4 border-white/30 object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-white">{single.firstName} {single.lastName}</h2>
                    <p className="text-blue-100">{single.email}</p>
                    <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold bg-white/20 text-white rounded-full">
                      {single.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-rose-500  mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{single.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-rose-500  mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{single.gender}, {single.birthDate}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-rose-500  mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span>Blood Group: {single.bloodGroup}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-rose-500  mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{single.address?.address}, {single.address?.city}, {single.address?.state}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                    <svg className="w-5 h-5 text-rose-500  mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Company
                  </h3>
                  <div className="bg-rose-50 rounded-lg p-3">
                    <p className="text-xl font-bold text-gray-800">{single.company?.title}</p>
                    <p className="text-sm text-gray-600 font-semibold mt-1">{single.company?.name}</p>
                    <p className="text-sm text-gray-600 font-semibold mt-1">{single.company?.department}</p>
                    <p className="text-sm text-gray-600 mt-1">{single.company?.address.city},{single.company?.address.country}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        {users.length > usersPerPage && (
          <div className="mt-12 flex flex-col items-center">
            <div className="flex items-center gap-1">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Previous
              </button>
              
              {/* Show limited page numbers with ellipsis */}
              {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = index + 1;
                } else if (currentPage <= 3) {
                  pageNumber = index + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + index;
                } else {
                  pageNumber = currentPage - 2 + index;
                }

                return (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`px-4 py-2 rounded-md border ${currentPage === pageNumber ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-300/30' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="px-2 py-2">...</span>
              )}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <button
                  onClick={() => paginate(totalPages)}
                  className={`px-4 py-2 rounded-md border ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  {totalPages}
                </button>
              )}

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Next
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Page {currentPage} of {totalPages} | Showing users {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, users.length)} of {users.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default User;  