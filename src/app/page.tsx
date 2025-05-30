"use client";

import Head from 'next/head';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Project';
import StarryBackground from '../components/StarryBackground';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="dark font-sans">
        <StarryBackground />
        <div className="min-h-screen text-gray-800 dark:text-gray-300">
          <Header />
          <main className="mx-auto max-w-3xl p-4 selection:bg-black text-gray-500 dark:text-gray-300">
            <div className="space-y-16">
              <About />
              <Projects />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}