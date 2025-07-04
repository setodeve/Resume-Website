"use client";

import Head from 'next/head';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Project';
import P5Background from '../components/P5Background';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="dark font-sans">
        <P5Background />
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