"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../../components/Header';

config.autoAddCss = false;

interface Project {
  title: string;
  summary: string;
  source: string;
  badge: string[];
  thumbnail: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch('/projects.json');
      const data = await response.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="dark font-sans">
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-gray-500 dark:text-gray-300">
          <Header />
          <main className="mx-auto max-w-5xl p-4 selection:bg-black text-gray-500 dark:text-gray-300">
            <section id="project-list" className="mt-12 text-gray-500 dark:text-gray-300">
              <h2 className="text-3xl font-bold">
                <FontAwesomeIcon icon={faFile} className="mr-2" />
                プロジェクト
              </h2>
              <hr className="h-px mt-2 mb-5 bg-yellow-400 border-0" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <section key={index} className="card cursor-pointer rounded my-2 p-5 shadow-sm shadow-black/30 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <a href={project.source}>
                      <header className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                      </header>
                      <div className="mt-2 dark:text-gray-300">{project.summary}</div>
                      <footer className="my-4 flex flex-wrap gap-1">
                        {project.badge.map((b, i) => (
                          <img key={i} src={b} alt={`Badge ${i}`} />
                        ))}
                      </footer>
                      {project.thumbnail.map((t, i) => (
                        <img key={i} className="mx-auto" src={t} alt={`Thumbnail ${i}`} />
                      ))}
                    </a>
                  </section>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
} 