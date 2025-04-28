"use client";

import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Project';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="dark font-sans">
        <div className="min-h-screen bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300">
          <Header />
          <main className="mx-auto max-w-3xl p-4 selection:bg-black text-gray-500 dark:text-gray-300">
            <div className="space-y-16">
              <About/>
              <Projects/>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}