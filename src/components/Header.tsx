"use client";
import Link from 'next/link';
import Cat from './Cat';

export default function Header() {
  return (
    <header className="inset-x-0 bg-white dark:bg-neutral-900 sm:relative border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto justify-between p-3 sm:flex sm:justify-between sm:max-w-4xl sm:p-4">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Resume</div>
        <div className="flex items-center font-bold justify-end">
          <Link className="mx-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200" href="https://github.com/setodeve" target="_blank" aria-label="GitHub">Github</Link>
          <Link className="mx-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200" href="https://qiita.com/keiswe" target="_blank" aria-label="Qiita">Qiita</Link>
          <Cat/>
        </div>
      </div>
    </header>
  );
}