// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    social: {
      twitter: {
        username: string;
      };
      facebook: {
        username: string;
      };
      instagram: {
        username: string;
      };
    };
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    social: {
      twitter: {
        username: string;
      };
      facebook: {
        username: string;
      };
      instagram: {
        username: string;
      };
    };
  }
}