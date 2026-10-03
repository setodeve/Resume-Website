import type { CareerSummary } from "@/lib/resume";

export default function CareerList({ careers }: { careers: CareerSummary[] }) {
  return (
    <ul>
      {careers.map((career) => (
        <li
          key={career.id}
          className="fade-rule grid gap-x-5 gap-y-1 py-[18px] min-[480px]:grid-cols-[150px_minmax(0,1fr)]"
        >
          <span className="pt-0.5 text-[13px] text-text-64 tabular-nums">{career.period}</span>
          <div className="flex min-w-0 flex-col gap-2">
            <span className="text-base">
              {career.company}
              {career.position && (
                <span className="text-sm text-text-64"> — {career.position}</span>
              )}
            </span>
            {career.technologies.length > 0 && (
              <span className="text-[13px] leading-[1.6] text-text-72">
                {career.technologies.join(" · ")}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
