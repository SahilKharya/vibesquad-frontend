// // app/profile/page.tsx
// 'use client';

// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// const Profile = () => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'unauthenticated') {
//     router.push('/sign-in');
//     return null;
//   }

//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>Welcome, {session?.user?.email}!</p>
//     </div>
//   );
// };

// export default Profile;
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return <div>welcome to admin {session?.user.username}</div>;
};

export default page;
