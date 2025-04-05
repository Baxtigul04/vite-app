import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://nt-devconnector.onrender.com/api/auth", {
          headers: { "x-auth-token": token },
        })
        .then((res) => {
          setUserId(res.data._id);
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [token]);

  useEffect(() => {
    axios
      .get(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id, token]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    axios
      .post(
        `https://nt-devconnector.onrender.com/api/posts/comment/${id}`,
        { text: comment },
        { headers: { "x-auth-token": token } }
      )
      .then((res) => {
        setPost({ ...post, comments: res.data });
        setComment("");
      })
      .catch((err) => console.error("Error adding comment:", err));
  };

  const handleDeleteComment = (commentId) => {
    axios
      .delete(
        `https://nt-devconnector.onrender.com/api/posts/comment/${id}/${commentId}`,
        {
          headers: { "x-auth-token": token },
        }
      )
      .then((res) => {
        setPost({ ...post, comments: res.data });
      })
      .catch((err) => console.error("Error deleting comment:", err));
  };

  const handleLikePost = () => {
    axios
      .put(
        `https://nt-devconnector.onrender.com/api/posts/like/${id}`,
        {},
        { headers: { "x-auth-token": token } }
      )
      .then(() => {
        setPost({
          ...post,
          likes: [...post.likes, { user: userId }],
        });
      })
      .catch((err) => console.error("Error liking post:", err));
  };

  const handleUnlikePost = () => {
    axios
      .put(
        `https://nt-devconnector.onrender.com/api/posts/unlike/${id}`,
        {},
        { headers: { "x-auth-token": token } }
      )
      .then(() => {
        setPost({
          ...post,
          likes: post.likes.filter((like) => like.user !== userId),
        });
      })
      .catch((err) => console.error("Error unliking post:", err));
  };

  const handleDeletePost = () => {
    axios
      .delete(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then(() => {
        navigate("/posts");
      })
      .catch((err) => console.error("Error deleting post:", err));
  };

  const isPostLikedByUser = () => {
    return post.likes && post.likes.some((like) => like.user === userId);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              {post.name && post.name.charAt(0)}
            </div>
            <h3 className="text-xl font-semibold">{post.name}</h3>
          </div>
          <p className="text-gray-700 mb-6">{post.text}</p>

          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() =>
                isPostLikedByUser() ? handleUnlikePost() : handleLikePost()
              }
              className={`flex items-center space-x-1 ${
                isPostLikedByUser() ? "text-indigo-600" : "text-gray-500"
              } hover:text-indigo-700`}
            >
              <span className="font-bold">👍</span>
              <span>{post.likes ? post.likes.length : 0} likes</span>
            </button>

            {post.user === userId && (
              <button
                onClick={handleDeletePost}
                className="flex items-center space-x-1 text-red-500 hover:text-red-700"
              >
                <span className="font-bold">🗑️</span>
                <span>Delete Post</span>
              </button>
            )}
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>
            <form onSubmit={handleSubmitComment} className="mb-6">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
                rows="4"
                placeholder="Comment on this post"
              ></textarea>
              <button
                type="submit"
                disabled={!comment.trim()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                Submit
              </button>
            </form>
          </div>

          {post.comments && post.comments.length > 0 && (
            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold mb-4">Comments</h4>
              <div className="space-y-4">
                {post.comments.map((comment) => (
                  <div key={comment._id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {comment.name.charAt(0)}
                      </div>
                      <h5 className="font-medium">{comment.name}</h5>
                    </div>
                    <p className="text-gray-700 mb-2">{comment.text}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{new Date(comment.date).toLocaleDateString()}</span>
                      {comment.user === userId && (
                        <button
                          onClick={() => handleDeleteComment(comment._id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="Delete comment"
                        >
                          <span className="font-bold">🗑️</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
