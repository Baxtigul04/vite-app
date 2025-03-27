import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nt-devconnector.onrender.com/api/profile`)
      .then((res) => setDevelopers(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Developers</h2>
          <p className="text-gray-600 mb-4">
            Browse and connect with developers
          </p>
        </div>

        <div className="space-y-4">
          {developers.map((dev) => (
            <div key={dev._id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0 md:mr-6">
                  {dev.user && dev.user.name && dev.user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    {dev.user && dev.user.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{dev.status}</p>
                  <Link
                    to={`/profile/${dev._id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
