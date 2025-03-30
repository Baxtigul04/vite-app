import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const token = localStorage.getItem("token");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (token) {
      axios
        .get("https://nt-devconnector.onrender.com/api/auth", {
          headers: { "x-auth-token": token },
        })
        .then((res) => {
          setUserId(res.data._id);
        });
    }
  }, [token]);

  useEffect(() => {
    axios
      .get(`https://nt-devconnector.onrender.com/api/posts`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => setPosts(res.data));
  }, []);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    axios
      .post(
        `https://nt-devconnector.onrender.com/api/posts`,
        { text: newPostText },
        { headers: { "x-auth-token": token } }
      )
      .then((res) => {
        setPosts([res.data, ...posts]);
        setNewPostText("");
      });
  };

  const handleLikePost = (postId) => {
    axios
      .put(
        `https://nt-devconnector.onrender.com/api/posts/like/${postId}`,
        {},
        { headers: { "x-auth-token": token } }
      )
      .then(() => {
        setPosts(
          posts.map((post) =>
            post._id === postId
              ? { ...post, likes: [...post.likes, { user: userId }] }
              : post
          )
        );
      });
  };

  const handleUnlikePost = (postId) => {
    axios
      .put(
        `https://nt-devconnector.onrender.com/api/posts/unlike/${postId}`,
        {},
        { headers: { "x-auth-token": token } }
      )
      .then(() => {
        setPosts(
          posts.map((post) =>
            post._id === postId
              ? {
                  ...post,
                  likes: post.likes.filter((like) => like.user !== userId),
                }
              : post
          )
        );
      });
  };

  const handleDeletePost = (postId) => {
    axios
      .delete(`https://nt-devconnector.onrender.com/api/posts/${postId}`, {
        headers: { "x-auth-token": token },
      })
      .then(() => {
        setPosts(posts.filter((post) => post._id !== postId));
      });
  };

  const isPostLikedByUser = (post) => {
    return post.likes.some((like) => like.user === userId);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <p className="text-gray-600 mb-4">Welcome to the community</p>

          <form onSubmit={handleCreatePost} className="mt-6">
            <textarea
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
              rows="4"
            ></textarea>
            <button
              type="submit"
              disabled={!newPostText.trim()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              Post
            </button>
          </form>
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
                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      isPostLikedByUser(post)
                        ? handleUnlikePost(post._id)
                        : handleLikePost(post._id)
                    }
                    className={`flex items-center space-x-1 ${
                      isPostLikedByUser(post)
                        ? "text-indigo-600"
                        : "text-gray-500"
                    } hover:text-indigo-700`}
                  >
                    <span className="font-bold">👍</span>
                    <span>{post.likes.length}</span>
                  </button>

                  <Link
                    to={`/posts/${post._id}`}
                    className="flex items-center space-x-1 text-gray-500 hover:text-indigo-700"
                  >
                    <span className="font-bold">💬</span>
                    <span>{post.comments.length}</span>
                  </Link>
                </div>

                {post.user === userId && (
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Delete post"
                  >
                    <span className="font-bold">🗑️</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
