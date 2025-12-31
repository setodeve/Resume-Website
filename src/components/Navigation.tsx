"use client";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center gap-6 py-4">
      <Link
        href="/works"
        className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
      >
        works
      </Link>
      <span className="text-gray-600">|</span>
      <Link
        href="/cv"
        className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
      >
        cv
      </Link>
    </nav>
  );
}
