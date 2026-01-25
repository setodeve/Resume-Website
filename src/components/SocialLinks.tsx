"use client";
import Link from "next/link";
import { Github, Briefcase, FileText } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <Link
        href="/works"
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
        aria-label="Works"
      >
        <Briefcase size={20} />
        <span>Works</span>
      </Link>
      <Link
        href="/cv"
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
        aria-label="CV"
      >
        <FileText size={20} />
        <span>CV</span>
      </Link>
      <Link
        href="https://github.com/setodeve"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
        aria-label="GitHub"
      >
        <Github size={20} />
        <span>GitHub</span>
      </Link>
      <Link
        href="https://qiita.com/keiswe"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
        aria-label="Qiita"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12c3.3984 0 6.4665-1.413 8.6498-3.6832-.383-.0574-.7746-.2062-1.1466-.4542-.7145-.4763-1.3486-.9263-1.6817-1.674-1.2945 1.3807-3.0532 1.835-5.1822 2.0503-4.311.4359-8.0456-1.4893-8.4979-6.2996-.1922-2.045.2628-3.989 1.1804-5.582l-.5342-2.1009c-.0862-.3652.2498-.7126.6057-.6262l1.8456.448c1.0974-.9012 2.4249-1.49 3.8892-1.638 1.2526-.1267 2.467.0834 3.571.5624l1.7348-1.0494c.3265-.1974.7399.0257.7711.4164l.1 2.4747v.0002c1.334 1.4084 2.2424 3.3319 2.4478 5.516.116 1.2339-.012 2.1776-.339 3.078-.1531.4215-.1992.7778.0776 1.1305.2674.3408.6915 1.0026 1.1644.8917.7107-.1666 1.4718-.1223 1.9422.1715C23.4925 15.9525 24 14.0358 24 12c0-6.6274-5.3726-12-12-12Zm-.0727 5.727a5.2731 5.2731 0 0 0-.6146.0273c-2.2084.2233-3.9572 1.8135-4.4937 3.8484l-1.3176-.1996-.014.2589 1.2972.1407c-.0352.1497-.0643.2384-.086.3923l-1.1319.0902.0103.2025 1.1032-.088c-.0194.1713-.031.2814-.0332.4565l-1.0078.412.0495.2499.9598-.4492c.002.1339.008.2053.0207.3407.2667 2.8371 2.6364 3.3981 5.4677 3.1118 2.8312-.2863 5.0517-1.3114 4.785-4.1486-.013-.1361-.0324-.2068-.0553-.3392l1.0397.2257.0242-.229-1.0906-.207c-.0342-.1687-.0765-.271-.1264-.4327l1.1208-.1374-.0158-.2019-1.1499.1409a5.1093 5.1093 0 0 0-.1665-.4259l1.2665-.4042-.0397-.2536-1.3471.4667c-.819-1.7168-2.5002-2.8224-4.4546-2.8482Z" />
        </svg>
        <span>Qiita</span>
      </Link>
      <Link
        href="https://scrapbox.io/setokei/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
        aria-label="Scrapbox"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c.194 0 .388.04.535.117l4.93 2.592c.296.156.295.406 0 .562L12.32 8.977c-.177.092-.177.244 0 .337l5.145 2.706c.183.096.342.286.44.498l-4.987 2.623a.533.533 0 0 0-.281.476v.002a.536.536 0 0 0 .281.479l4.836 2.545a.948.948 0 0 1-.29.248l-4.929 2.591c-.296.156-.774.156-1.07 0l-4.93-2.591c-.296-.156-.295-.407 0-.563l5.145-2.705c.176-.092.177-.245 0-.338L6.535 12.58a1 1 0 0 1-.373-.367l4.942-2.57a.516.516 0 0 0 .279-.26.554.554 0 0 0 0-.48.515.515 0 0 0-.28-.258l-4.939-2.57a1 1 0 0 1 .371-.366l4.93-2.592A1.19 1.19 0 0 1 12 3zM6 7.176l3.781 1.967L6 11.109V7.176zm12 6.48v3.926l-3.732-1.963L18 13.656z" />
        </svg>
        <span>Scrapbox</span>
      </Link>
    </div>
  );
}
