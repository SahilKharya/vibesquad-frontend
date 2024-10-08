"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const ProfilePage = () => {
  const { data: session } = useSession();
  const [socialUsernames, setSocialUsernames] = useState({
    twitter: '',
    instagram: '',
    facebook: '',
  });

  const handleChange = (e) => {
    setSocialUsernames({
      ...socialUsernames,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the social usernames (API call or other logic)
    console.log(socialUsernames);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={'/logo-VS.png'}
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-md"
        />
        <h1 className="text-2xl font-semibold">{session?.user?.name}</h1>
        <p className="text-gray-600">User Rating: <strong>4.5/5</strong></p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1">
            <label htmlFor="twitter" className="block text-gray-700">
              Twitter Username
            </label>
            <input
              type="text"
              name="twitter"
              value={socialUsernames.twitter}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="instagram" className="block text-gray-700">
              Instagram Username
            </label>
            <input
              type="text"
              name="instagram"
              value={socialUsernames.instagram}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="facebook" className="block text-gray-700">
              Facebook Username
            </label>
            <input
              type="text"
              name="facebook"
              value={socialUsernames.facebook}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save Usernames
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
