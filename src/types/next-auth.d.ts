import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
  }

  interface Session {
    user: User & {
      username: string;
      userId: string;
    };
    token: {
      username: string;
      userResponse: Object;
    };
  }
  interface Token {
    id?: string;
    username?: string;
    profile?: any; // Define the type of profile property
    userResponse?: {
      data: {
        user: {
          id: string;
        };
      };
    };
  }
  
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    accessToken: string;
  }
}