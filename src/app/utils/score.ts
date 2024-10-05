export const calculateInfluenceScore = (
  followerCount: number,
  followerQuality: number,
  engagementRate: number,
  engagementQuality: number,
  contentTypePerformance: number,
  sentimentScore: number,
  postFrequency: number,
  profileActivity: number,
  networkInfluence: number
) => {
  const weights = [0.1, 0.2, 0.2, 0.2, 0.1, 0.05, 0.05, 0.05, 0.05];
  const metrics = [
    followerCount,
    followerQuality,
    engagementRate,
    engagementQuality,
    contentTypePerformance,
    sentimentScore,
    postFrequency,
    profileActivity,
    networkInfluence,
  ];

  const influenceScore = metrics.reduce((acc, metric, i) => acc + metric * weights[i], 0);
  return influenceScore;
};
