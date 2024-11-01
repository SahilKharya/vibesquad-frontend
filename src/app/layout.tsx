import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@components/layout/footer";
import AuthProvider from "src/context/AuthProvider";
import NavBar from "@components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeSquad",
  description: "Elevate your influence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {" "}
          {/* Wrap everything in SessionProvider */}
          <main className="flex flex-col">
            <NavBar />
            {children}
          </main>
          <Footer />
          {/* <LoginModal /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
