import Image from "next/image";
import { ArticleIcon, GithubLogoIcon, NotebookIcon } from "@phosphor-icons/react/dist/ssr";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/setodeve", Icon: GithubLogoIcon },
  { label: "Qiita", href: "https://qiita.com/keiswe", Icon: ArticleIcon },
  { label: "Zenn", href: "https://zenn.dev/poppok", Icon: NotebookIcon },
];

export default function Profile() {
  return (
    <section className="flex flex-col gap-4">
      <Image
        src="https://github.com/setodeve.png"
        alt="setodeve"
        width={80}
        height={80}
        className="rounded-full shadow-sm"
        priority
      />
      <div>
        <h1 className="mb-1 text-[30px] leading-[1.12] tracking-[-0.02em]">setodeve</h1>
        <p className="text-[15px] text-text-64">Webエンジニア</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-80 hover:text-accent"
          >
            <Icon size={16} aria-hidden />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
