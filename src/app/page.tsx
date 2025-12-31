"use client";

import Navigation from "@/components/Navigation";
import Profile from "@/components/Profile";
import SocialLinks from "@/components/SocialLinks";
import Cat from "@/components/Cat";

export default function Home() {
  return (
    <div className="dark font-sans min-h-screen bg-[#0a0a0a] text-gray-300">
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="space-y-8">
            <Profile />
            <SocialLinks />
          </div>
        </main>

        <footer className="py-8 flex justify-center">
          <Cat />
        </footer>
      </div>
    </div>
  );
}
