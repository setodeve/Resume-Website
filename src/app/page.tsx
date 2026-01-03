"use client";

import Profile from "@/components/Profile";
import SocialLinks from "@/components/SocialLinks";
import Cat from "@/components/Cat";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="font-sans min-h-screen text-gray-800 dark:text-gray-300">
      <div className="flex flex-col min-h-screen">
        <header className="absolute top-4 right-4">
          <ThemeToggle />
        </header>

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
