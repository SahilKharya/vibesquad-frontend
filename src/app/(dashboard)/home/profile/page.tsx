"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState<any>(null); // State to store user info
  const [socialUsernames, setSocialUsernames] = useState({
    twitter: "",
    instagram: "",
    facebook: "",
  });

  // Fetch user info using Next.js API route with dynamic ID
  useEffect(() => {
    if (session) {
      console.log("Session Info:", session); // Logs session data in the browser console
      const userId = session?.user?.id; // Assuming session contains `user.id`

      // Fetch user info using the userId
      const fetchUserInfo = async () => {
        try {
          const response = await fetch(`/api/user/${userId}`); // Fetch user info from your API
          const data = await response.json();
          setUserInfo(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserInfo();
    }
  }, [session]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setSocialUsernames({
      ...socialUsernames,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (platform: keyof typeof socialUsernames) => {
    console.log(`Saved ${platform} username:`, socialUsernames[platform]);
    // API call or logic to save the specific username for the platform
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/logo-VS.png"
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full shadow-md"
        />

        {/* Display social score if available */}
        {userInfo && (
          <div className="mt-4">
            <p className="text-lg font-medium">
              Social Score: <strong>{userInfo.socialScore}</strong>
            </p>
          </div>
        )}
      </div>

      {/* Social Username Inputs */}
      <div className="space-y-6">
        {(
          ["twitter", "instagram", "facebook"] as Array<
            keyof typeof socialUsernames
          >
        ).map((platform) => (
          <div key={platform} className="flex items-center space-x-4">
            <div className="flex-1">
              <label
                htmlFor={platform}
                className="block text-gray-700 capitalize"
              >
                {platform} Username
              </label>
              <input
                type="text"
                name={platform}
                value={socialUsernames[platform]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="button"
              onClick={() => handleSave(platform)}
              className={`px-4 py-2 bg-${
                platform === "twitter"
                  ? "blue-600"
                  : platform === "instagram"
                  ? "pink-500"
                  : "blue-800"
              } text-white rounded-md hover:bg-${
                platform === "twitter"
                  ? "blue-700"
                  : platform === "instagram"
                  ? "pink-600"
                  : "blue-900"
              } transition`}
            >
              Save {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
