"use client";

import React, { useEffect } from "react";
import { calculateInfluenceScore } from "../../utils/score";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();

  const userMetrics = {
    followerCount: 10000,
    followerQuality: 500,
    engagementRate: 5.0,
    engagementQuality: 6.0,
    contentTypePerformance: 7.0,
    sentimentScore: 0.85,
    postFrequency: 10,
    profileActivity: 8,
    networkInfluence: 400,
  };

  const influenceScore = calculateInfluenceScore(
    userMetrics.followerCount,
    userMetrics.followerQuality,
    userMetrics.engagementRate,
    userMetrics.engagementQuality,
    userMetrics.contentTypePerformance,
    userMetrics.sentimentScore,
    userMetrics.postFrequency,
    userMetrics.profileActivity,
    userMetrics.networkInfluence
  );

  // API call to save login info when session is available
  useEffect(() => {
    const saveLoginInfo = async () => {
      if (session?.user) {
        try {
          console.log("jwt info");
          await fetch("https://api.vibesquad.co/v1/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: session.user.name,
              account: session.user.email,
              social: {
                twitter: {
                  username: session.user.username as string,
                },
              },
            }),
          });

          console.log("User login info saved successfully");
        } catch (error) {
          console.error("Error saving user login info:", error);
        }
      }
    };

    // Trigger the API call when session is ready
    saveLoginInfo();
  }, [session]);

  return (
    <div>
      {session ? (
        <div>
          <p>Hey, {session.user.username}</p>
          <p>Welcome, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
      <div>
        <h1>User Profile</h1>
        <p>Follower Count: {userMetrics.followerCount}</p>
        <p>Follower Quality: {userMetrics.followerQuality}</p>
        <p>Engagement Rate: {userMetrics.engagementRate}%</p>
        <p>Influence Score: {influenceScore.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
