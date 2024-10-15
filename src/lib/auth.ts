import { NextAuthOptions } from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import FacebookProvider from 'next-auth/providers/facebook';
import InstagramProvider from 'next-auth/providers/instagram';

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
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('JWT callback triggered');  // Log to check function is invoked
      console.log('Token:', token);           // Log initial token
      console.log('User:', user);             // Log user info if available
      console.log('Account:', account);       // Log account info if available
      console.log('Profile:', profile);       // Log profile info if available
      console.log('isNewUser:', isNewUser);   // Log if the user is new

      if (user) {
        token.id = user.id?.toString();
        token.username = user.username;
      }
      if (profile) {
        token.profile = profile;
      }
      try {
        let socialData = {};

        if (account?.provider === 'twitter') {
          socialData = { twitter: { username: user.username } };
        } else if (account?.provider === 'facebook') {
          socialData = { facebook: { username: user.username } };
        } else if (account?.provider === 'instagram') {
          socialData = { instagram: { username: user.username } };
        }
        console.log('socialData        :', socialData );       // Log account info if available


        // Use the relative URL to your Next.js API route
        await fetch(`${process.env.NEXTAUTH_URL}/api/user/saveLogin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: token.username,
            account: token.email,
            social: socialData
          }),
        });
      } catch (error) {
        console.error('Error saving user to DB:', error);
      }

      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.user.id = token.id!;
        session.user.name = token.name!;
        session.user.email = token.email!;
        session.user.username = token.username!;
      }

      return session;
    },
  },
};
