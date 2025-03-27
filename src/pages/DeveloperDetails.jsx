import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeveloperDetails = () => {
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nt-devconnector.onrender.com/api/profile/${id}`)
      .then((res) => setProfile(res.data));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4">
              {profile.user && profile.user.name && profile.user.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-bold">
              {profile.user && profile.user.name}
            </h2>
            <p className="text-gray-600">{profile.status}</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Bio</h3>
            <p className="text-gray-700 mb-6">{profile.bio}</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDetails;
