"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const ProfilePage = () => {
  console.log("ProfilePage component rendered");
  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [socialUsernames, setSocialUsernames] = useState({
    twitter: "",
    instagram: "",
    facebook: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log("ProfilePage component rendered");

  // Fetch user info only once when the component mounts
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (status === 'authenticated' && session?.user?.userId) {
        console.log('Fetching user data for ID:', session.user.userId);
        try {
          // Make a GET request to the API route
          const response = await axios.get(`/api/user/${session.user.userId}`);
          console.log('User data fetched:', response.data);
          const userData = response.data.data.user;

          // Set user info state
          setUserInfo(userData);

          // Initialize social usernames from the API response if available
          setSocialUsernames({
            twitter: userData.social.twitter?.username || "",
            instagram: userData.social.instagram?.username || "",
            facebook: userData.social.facebook?.username || "",
          });
        } catch (error) {
          console.error("Error fetching user info:", error);
          setError("Failed to load user data.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserInfo();
  }, [status, session?.user?.id]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setSocialUsernames({
      ...socialUsernames,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (platform: keyof typeof socialUsernames) => {
    // try {
    //   const response = await axios.put(`/api/user/${session?.user?.userId}/social`, {
    //     platform,
    //     username: socialUsernames[platform],
    //   });
    //   console.log(`Saved ${platform} username:`, socialUsernames[platform]);
    //   alert(`Successfully updated ${platform} username!`);
    // } catch (error) {
    //   console.error(`Error updating ${platform} username:`, error);
    //   alert(`Failed to update ${platform} username.`);
    // }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src={userInfo?.social?.twitter?.general?.branding?.avatar || "/vs.png"}
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full shadow-md"
        />

        {/* Display social score if available */}
        {userInfo && (
          <div className="mt-4">
            <p className="text-lg font-medium">
              Social Score: <strong>{userInfo.vibe || "N/A"}</strong>
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
                {platform} Username is
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
