import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../../../Api/Api";
import Error from "./Error";
import dummyImage from "../../../images/dummy.png";

const SingleBlog = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await blogData();
        const decodedTitle = decodeURIComponent(title);
        const foundBlog = data.articles.find(article => 
          article.title === decodedTitle
        );
        
        if (!foundBlog) {
          setError("Blog post not found");
        } else {
          setBlog(foundBlog);
        }
      } catch (err) {
        setError("Failed to load blog post");
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [title]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-stone-700">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!blog) {
    return <Error message="Blog post not found" />;
  }

  return (
    <div className="min-h-screen px-4 pt-[130px] pb-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="relative h-96 overflow-hidden">
          <img
            src={blog.urlToImage || dummyImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-rose-500">
              {blog.author || 'Unknown Author'}
            </span>
            <span className="text-sm text-stone-500">
              {blog.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-stone-800 mb-6">
            {blog.title}
          </h1>

          <div className="prose max-w-none text-stone-700">
            <p className="text-lg mb-4">{blog.description}</p>
            <p className="mb-4">{blog.content || 'No additional content available.'}</p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="mt-8 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-300/30 hover:shadow-xl hover:shadow-rose-300/50"
          >
            ← Back to All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;