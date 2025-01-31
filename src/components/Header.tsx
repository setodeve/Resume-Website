"use client";
import Link  from 'next/link';


export default function Header() {
  return (
    <header className="inset-x-0 bg-neutral-300 dark:bg-neutral-900 sm:relative">
      <div className="mx-auto justify-between p-3 sm:flex sm:justify-between sm:max-w-4xl sm:p-4">
        <div className="text-2xl font-bold"><Link href="/">setokei</Link></div>
        <div className="flex items-center font-bold justify-end">
          <Link className="mx-2" href="https://github.com/setodeve" target="_blank" aria-label="GitHub">Github</Link>
          <Link className="mx-2" href="https://qiita.com/keiswe" target="_blank" aria-label="Qiita">Qiita</Link>
        </div>
      </div>
    </header>
  );
} 