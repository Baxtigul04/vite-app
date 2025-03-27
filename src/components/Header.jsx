import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">DevConnector</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/developers"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
            >
              Developers
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/posts"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
                >
                  Posts
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
