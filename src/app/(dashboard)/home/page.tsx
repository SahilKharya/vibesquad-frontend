'use client';
import { useState } from 'react';
import { calculateInfluenceScore } from '../../utils/score';
import { UserMetrics } from '../../utils/type'; // Import the interface

interface ProfilePageProps {
  userMetrics: UserMetrics;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userMetrics }) => {
  const [username, setUsername] = useState('John Doe'); // Replace with actual username fetching logic
  console.log(userMetrics)
  const {
    followerCount,
    followerQuality,
    engagementRate,
    engagementQuality,
    contentTypePerformance,
    sentimentScore,
    postFrequency,
    profileActivity,
    networkInfluence,
  } = userMetrics;

  const influenceScore = calculateInfluenceScore(
    followerCount,
    followerQuality,
    engagementRate,
    engagementQuality,
    contentTypePerformance,
    sentimentScore,
    postFrequency,
    profileActivity,
    networkInfluence
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {username}'s Profile
        </h1>
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-600">
            Follower Count:
          </label>
          <p className="text-lg text-gray-700">{followerCount}</p>
        </div>
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-600">
            Engagement Rate:
          </label>
          <p className="text-lg text-gray-700">{engagementRate}%</p>
        </div>
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-600">
            Social Influence Score:
          </label>
          <p className="text-lg font-bold text-indigo-600">{influenceScore.toFixed(2)}</p>
        </div>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          onClick={() => alert('More metrics coming soon!')}
        >
          View More Metrics
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
