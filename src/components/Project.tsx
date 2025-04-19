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
import { motion, AnimatePresence } from 'framer-motion';

const BASE_PATH = nextConfig.basePath || "";

config.autoAddCss = false;

interface Project {
  title: string;
  summary: string;
  source: string;
  technologies: string[];
  thumbnail: string[];
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
      {text}
    </span>
  );
}

function SkeletonProjectCard() {
  return (
    <div className="h-full">
      <div className="group h-full flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
        <div className="animate-pulse">
          <div className="relative h-48 bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex flex-col flex-grow p-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`${BASE_PATH}/projects.json`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <section id="project-list">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold mb-2">
            <FontAwesomeIcon icon={faFile} className="text-gray-500 dark:text-gray-300 mr-2" />
            プロジェクト
          </h2>
          <hr className="h-px mb-5 bg-yellow-400 border-0" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {isLoading ? (
              [...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkeletonProjectCard />
                </motion.div>
              ))
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link href={project.source} className="h-full block">
                    <motion.div
                      className="group h-full flex flex-col relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-48">
                        <Image
                          src={project.thumbnail[0]}
                          alt={`${project.title} Thumbnail`}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                          priority={true}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="flex flex-col flex-grow p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} text={tech} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}