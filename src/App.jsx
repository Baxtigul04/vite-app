import React from "react";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import Developers from "./pages/Developers";
import DeveloperDetails from "./pages/DeveloperDetails";
import NotFound from "./pages/NotFound";
import CarDashboard from "./pages/CarDashboard";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/profile/:id" element={<DeveloperDetails />} />
        <Route
          path="/cars"
          element={
            <ProtectedRoute>
              <CarDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <ProtectedRoute>
              <PostDetails />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-6 text-white">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Developer Connector</h1>
        <p className="text-xl mb-8">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token") !== null;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default App;
