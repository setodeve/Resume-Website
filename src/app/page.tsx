"use client";

import Head from 'next/head';
import Header from '../components/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import About from '../components/About';
import Projects from '../components/Project';
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="dark font-sans">
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-gray-500 dark:text-gray-300">
          <Header />
          <main className="mx-auto max-w-3xl p-4 selection:bg-black text-gray-500 dark:text-gray-300">
            <About/>
            <Projects/>
          </main>
        </div>
      </div>
    </>
  );
}