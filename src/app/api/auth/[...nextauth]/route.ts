import NextAuth from 'next-auth';
import { authOptions } from '@lib/auth'; // Move your authOptions to a separate file (lib/auth.ts)

// Ensure you're exporting GET and POST handlers separately
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
