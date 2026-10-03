import { describe, expect, it } from "vitest";
import { summarizeCareer } from "./resume";

describe("summarizeCareer", () => {
  it("会社内の全案件の使用技術をフラット化して重複を除く", () => {
    const [summary] = summarizeCareer([
      {
        id: 1,
        company: "A社",
        period: "2024/8 - 現在",
        position: "Webエンジニア",
        experiences: [
          { period: "2025", technologies: { バックエンド: ["Python", "Django"], ツール: ["pytest"] } },
          { period: "2024", technologies: { バックエンド: ["Python"], フロントエンド: ["React"] } },
          { period: "2023" },
        ],
      },
    ]);
    expect(summary).toEqual({
      id: 1,
      company: "A社",
      period: "2024/8 - 現在",
      position: "Webエンジニア",
      technologies: ["Python", "Django", "pytest", "React"],
    });
  });
});
