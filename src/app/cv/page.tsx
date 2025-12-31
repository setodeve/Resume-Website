"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import About from "@/components/About";

export default function CVPage() {
  return (
    <div className="dark font-sans min-h-screen bg-[#0a0a0a] text-gray-300">
      <div className="mx-auto max-w-3xl p-4">
        <nav className="py-4 mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
        </nav>
        <About />
      </div>
    </div>
  );
}
