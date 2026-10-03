import ArticleList from "@/components/ArticleList";
import CareerList from "@/components/CareerList";
import Profile from "@/components/Profile";
import ResumeTabs from "@/components/ResumeTabs";
import ThemeToggle from "@/components/ThemeToggle";
import WorkList from "@/components/WorkList";
import { fetchLatestArticles } from "@/lib/articles";
import { summarizeCareer, type Experience, type Project } from "@/lib/resume";
import experiences from "../../public/experiences.json";
import projects from "../../public/projects.json";

const column = "mx-auto max-w-[680px] px-[clamp(20px,5vw,32px)]";

export default async function Home() {
  // 静的エクスポートのため、記事はビルド時に取得する
  const articles = await fetchLatestArticles();

  return (
    <>
      <div className={`${column} flex justify-end pt-[18px]`}>
        <ThemeToggle />
      </div>
      <main className={`${column} pt-[clamp(24px,6vw,64px)] pb-12`}>
        <Profile />
        <ResumeTabs
          panels={{
            articles: <ArticleList articles={articles} />,
            works: <WorkList projects={projects as Project[]} />,
            cv: <CareerList careers={summarizeCareer(experiences as Experience[])} />,
          }}
        />
      </main>
      <footer className={`${column} pt-8 pb-12 text-[13px] text-text-55`}>
        <span>© setodeve</span>
      </footer>
    </>
  );
}
