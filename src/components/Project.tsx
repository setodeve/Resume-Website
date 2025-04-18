"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import nextConfig from '../../next.config';
import { motion } from 'framer-motion';

const BASE_PATH = nextConfig.basePath || "";

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
      const response = await fetch(`${BASE_PATH}/projects.json`);
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
      <section id="project-list">
        <h2 className="text-3xl font-extrabold">
          <FontAwesomeIcon icon={faFile} className="text-gray-500 dark:text-gray-300" />
          プロジェクト
        </h2>
        <hr className="h-px mt-2 mb-5 bg-yellow-400 border-0" />
        <div className="card rounded-sm my-2 p-5 shadow-xs shadow-black/30 dark:bg-neutral-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={project.source}>
                  <Image
                    src={project.thumbnail[0]}
                    alt={`${project.title} Thumbnail`}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                    priority={true}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.summary}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}