// lib/auth.ts
import prisma from '@lib/prisma';
import { compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
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
          image: profile.picture?.data?.url,  // Facebook profile image
          username: profile.name,  // Assigning Facebook name as username
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
          email: profile.email,  // Twitter may not provide email; handle accordingly
          image: profile.profile_image_url_https,
          username: profile.screen_name,  // Custom field
        };
      },
    }),

    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
      profile(profile: any) {
        return {
          id: profile.id!,
          name: profile.username!,  // Instagram username
          email: profile.email!,
          image: profile.profile_picture!,
          username: profile.username!,  // Assign Instagram username
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
    async jwt({ token, user, account, profile, isNewUser }) {

      if (user) {
        token.id = user.id?.toString()
        token.username = user.username
      }
      if (profile) {
        console.log('profile   :', profile)

        token.profile = profile;
      }
      return token
    },

    async session({ session, user, token }) {
      console.log('sesss   :', session)
      console.log('token   :', token)
      console.log('user   :', user)
      if (user) {
        session.user.id = user.id!;
        session.user.name = user.name as string;
        session.user.username = user.username as string;
        session.user.email = user.email as string;
      } else if (token) {
        session.user.id = token.id!;
        session.user.name = token.username as string;
      }
      return session
    },
  },
};

