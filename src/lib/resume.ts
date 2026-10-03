export interface Project {
  id: number;
  title: string;
  summary: string;
  source: string;
  technologies: string[];
  thumbnail: string[];
}

export interface Experience {
  id: number;
  company: string;
  period: string;
  position?: string;
  experiences: {
    period: string;
    technologies?: Record<string, string[]>;
  }[];
}

export interface CareerSummary {
  id: number;
  company: string;
  period: string;
  position?: string;
  technologies: string[];
}

/** 会社単位の要約。各案件の使用技術をフラット化して重複を除く */
export function summarizeCareer(experiences: Experience[]): CareerSummary[] {
  return experiences.map(({ id, company, period, position, experiences: items }) => ({
    id,
    company,
    period,
    position,
    technologies: [
      ...new Set(items.flatMap((item) => Object.values(item.technologies ?? {}).flat())),
    ],
  }));
}
