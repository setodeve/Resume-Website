"use client";

import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Resume</title>
      </Head>
      <div className="dark font-sans">
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-gray-500 dark:text-gray-300">
          <Header />
          <main className="mx-auto max-w-3xl p-4 selection:bg-black text-gray-500 dark:text-gray-300">
            <section className="mt-12 text-gray-500 dark:text-gray-300">
              <h2 className="text-3xl font-bold">Welcome to My Resume</h2>
              <hr className="h-px mt-2 mb-5 bg-yellow-400 border-0" />
              <p>このサイトでは、私の職務経歴とプロジェクトを紹介しています。</p>
              <p>詳細は、上部のリンクから各ページをご覧ください。</p>
              <div className="mt-4">
                <a href="/about" className="text-blue-600 hover:underline">職務経歴を見る</a>
              </div>
              <div className="mt-2">
                <a href="/projects" className="text-blue-600 hover:underline">プロジェクトを見る</a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}