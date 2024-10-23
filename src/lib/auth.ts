import { NextAuthOptions } from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import FacebookProvider from 'next-auth/providers/facebook';
import InstagramProvider from 'next-auth/providers/instagram';
import axios from 'axios';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture?.data?.url,
          username: profile.name,
        };
      }
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_API_KEY!,
      clientSecret: process.env.TWITTER_API_SECRET!,
      profile(profile) {
        return {
          id: profile.id_str,
          name: profile.name,
          email: profile.email,
          image: profile.profile_image_url_https,
          username: profile.screen_name,
        };
      },
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "instagram_business_basic,instagram_business_content_publish,instagram_business_manage_comments,instagram_business_manage_messages,user_profile,user_media",
        },
      },
      profile(profile: any) {
        return {
          id: profile.id!,
          name: profile.username!,
          email: profile.email!,
          image: profile.profile_picture!,
          username: profile.username!,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user, account, profile }) {
      console.log('JWT callback triggered');  // Log to check function is invoked

      if (user) {
        token.id = user.id?.toString();
        token.username = user.username;

        // Prepare the payload for the API call
        const payload = {
          "username": token.id || user.username,
          "account": account?.providerAccountId,
          "social": {
            [account?.provider || 'unknown']: {
              username: user.username,
            },
          },
        };

        try {
          // Make an API request to save user login info
          const baseUrl = process.env.NEXTAUTH_URL;
          const response = await axios.post(`${baseUrl}/api/user`, payload, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log('User successfully saved:', response.data);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            // Handle Axios-specific errors
            console.error('Axios error:', error.response?.data || error.message);
          } else if (error instanceof Error) {
            // Handle general errors
            console.error('Error saving user to DB:', error.message);
          } else {
            console.error('Unknown error:', error);
          }
        }
      }
      if (profile) {
        token.profile = profile;
      }

      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.user.id = token.id!;
        session.user.name = token.name!;
        session.user.email = token.email!;
        session.user.username = token.username as string;
      }

      return session;
    },
  },
};
