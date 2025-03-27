import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`https://nt-devconnector.onrender.com/api/posts`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <p className="text-gray-600 mb-4">Welcome to the community</p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {post.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold">{post.name}</h3>
              </div>
              <p className="text-gray-700 mb-4">{post.text}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/posts/${post._id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Discussion
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
