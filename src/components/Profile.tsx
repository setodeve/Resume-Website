"use client";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src="https://github.com/setodeve.png"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full"
        priority
      />
      <div className="text-center">
        <h1 className="text-xl font-medium text-gray-100">@setodeve</h1>
        <p className="text-gray-400">Web Engineer</p>
      </div>
    </div>
  );
}
