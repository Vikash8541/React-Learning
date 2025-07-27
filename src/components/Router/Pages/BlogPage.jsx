// BlogPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../../Api/Api";
import dummyImage from "../../../images/dummy.png";

const BlogPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    const blogFetch = async () => {
      try {
        const data = await blogData();
        setNews(data.articles || []);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    blogFetch();
  }, []);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(news.length / articlesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers with exactly 5 numbers then ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
        pages.push(i);
      }
      if (totalPages > maxVisiblePages) {
        pages.push('...');
        pages.push(totalPages);
      }
    } 
    else if (currentPage > 3 && currentPage < totalPages - 2) {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    }
    else {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-stone-700">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 pt-[130px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-stone-800 mb-3">Blog Articles</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our latest stories and insights
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-stone-100"
            >
              <div className="h-60 overflow-hidden">
                <Link to={`/blog/${encodeURIComponent(item.title)}`}>
                  <img 
                    src={item.urlToImage || dummyImage} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </Link>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-stone-500 mb-3">
                  <span className="font-medium text-rose-500">
                    {item.author || 'Unknown Author'}
                  </span>
                  <span className="text-stone-400">{item.publishedAt}</span>
                </div>
                
                <h2 className="text-xl font-bold text-stone-800 mb-2 line-clamp-2">
                  <Link to={`/blog/${encodeURIComponent(item.title)}`} className="hover:text-amber-500 transition">
                    {item.title}
                  </Link>
                </h2>
                
                <p className="text-stone-600 mb-4 line-clamp-3">
                  {item.description || 'No description available.'}
                </p>
                
                <Link 
                  to={`/blog/${encodeURIComponent(item.title)}`}
                  className="inline-flex items-center text-rose-500 hover:text-amber-500 font-medium group"
                >
                  Read full story
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {news.length > articlesPerPage && (
          <div className="mt-16 flex flex-col items-center">
            <div className="flex items-center gap-1 mb-2">
              <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Previous
              </button>
              
              {getPageNumbers().map((number, index) => (
                number === '...' ? (
                  <span key={index} className="px-1">...</span>
                ) : (
                  <button
                    key={index}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 rounded-md border ${currentPage === number ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-300/30' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    {number}
                  </button>
                )
              ))}
              
              <button
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 ${currentPage === totalPages ? 'text-stone-400 cursor-not-allowed' : 'text-stone-700 hover:text-amber-500'}`}
              >
                Next
              </button>
            </div>
            
            <div className="text-sm text-stone-500">
              Page {currentPage} of {totalPages} | Showing articles {indexOfFirstArticle + 1} to {Math.min(indexOfLastArticle, news.length)} of {news.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;