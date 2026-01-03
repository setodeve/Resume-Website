"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import About from "@/components/About";
import ThemeToggle from "@/components/ThemeToggle";

export default function CVPage() {
  return (
    <div className="font-sans min-h-screen text-gray-800 dark:text-gray-300">
      <div className="mx-auto max-w-3xl p-4">
        <nav className="py-4 mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
          <ThemeToggle />
        </nav>
        <About />
      </div>
    </div>
  );
}
