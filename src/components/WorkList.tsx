import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/resume";

export default function WorkList({ projects }: { projects: Project[] }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-rule flex items-center gap-4 py-3.5 text-text hover:text-accent"
          >
            <span className="block h-[45px] w-[72px] flex-none overflow-hidden rounded bg-surface dark:mix-blend-lighten">
              {project.thumbnail[0] && (
                <Image
                  src={project.thumbnail[0]}
                  alt=""
                  width={72}
                  height={45}
                  loading="lazy"
                  className="size-full object-cover object-top"
                />
              )}
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-base">{project.title}</span>
              <span className="text-[13px] leading-normal text-text-64">{project.summary}</span>
            </span>
            <ArrowUpRightIcon size={15} className="flex-none" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
