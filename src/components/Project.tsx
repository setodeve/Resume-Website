"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { File } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import nextConfig from '../../next.config';

import SkeletonProjectCard from './SkeletonProjectCard';

const BASE_PATH = nextConfig.basePath || "";

interface Project {
  title: string;
  summary: string;
  source: string;
  technologies: string[];
  thumbnail: string[];
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 shadow-sm">
      {text}
    </span>
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
      <section id="project-list" className="py-12">
        <h2 className="flex items-center text-4xl font-bold mb-4 text-gray-100">
          <File className="mr-3 w-10 h-10" />
          プロジェクト
        </h2>
        <hr className="h-1 mb-8 bg-yellow-400 border-0 rounded" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="sync">
            {isLoading ? (
              [...Array(6)].map((_, index) => (
                <SkeletonProjectCard key={index}/>
              ))
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link href={project.source} className="h-full block">
                    <motion.div
                      className="group h-full flex flex-col relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-neutral-800 border-2 border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-400"
                      whileHover={{ scale: 1.03, y: -6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={project.thumbnail[0]}
                          alt={`${project.title} Thumbnail`}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          priority={true}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="flex flex-col flex-grow p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
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