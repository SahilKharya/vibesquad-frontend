import { NextAuthOptions } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitter';
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
      },
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
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.profile_picture,
          username: profile.username,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log(url)
      console.log(baseUrl)
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },


    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      if (profile) {
        token.profile = profile;
      }
      return token;
    },
    async session({ session, token }) {
      // Populate session with token data
      session.user.id = token.id as string;
      session.user.username = token.username as string;

      // console.log("session :  ", session)
      // console.log("token eee 80 :  ", token)

      return session;
    },
  },
};
