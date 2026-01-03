"use client";

import Head from 'next/head';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import nextConfig from '../../next.config';

import SkeletonProjectCard from './SkeletonProjectCard';

const BASE_PATH = nextConfig.basePath || "";

interface Experience {
  id: number;
  company: string;
  period: string;
  position?: string;
  experiences: {
    period: string;
    projectOverview: string;
    responsibilities: string[] | string;
    technologies?: { [category: string]: string[] };
    achievements: string[];
    link?: string;
  }[];
  technologies?: string[];
}

export default function About() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const response = await fetch(`${BASE_PATH}/experiences.json`);
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchExperiences();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
    case "バックエンド":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "フロントエンド":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "インフラ":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "ツール":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <section className="text-gray-800 dark:text-gray-200 py-8">
        
        <div className="space-y-8">
          <AnimatePresence mode="sync">
            {isLoading ? (
              <SkeletonProjectCard />
            ) : (
              experiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  className="card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">
                          {experience.company}
                        </h3>
                        {experience.position && (
                          <p className="text-gray-600 dark:text-gray-400">
                            職種 : {experience.position}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-1" />
                        {experience.period}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-6">
                    {experience.experiences.map((exp, expIndex) => (
                      <div key={expIndex} className="mt-4 space-y-6">
                        <div className="flex items-center text-gray-700 dark:text-gray-200 mb-2">
                          <Calendar className="mr-2" />
                          <h4 className="text-lg font-semibold">{exp.period}</h4>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">【プロジェクト概要】</h5>
                            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{exp.projectOverview}</p>
                          </div>
                          <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">【業務内容】</h5>
                            {Array.isArray(exp.responsibilities) ? (
                              <ul className="space-y-2">
                                {exp.responsibilities.map((resp, i) => (
                                  <li key={i} className="text-gray-600 dark:text-gray-300">{resp}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-600 dark:text-gray-300">{exp.responsibilities}</p>
                            )}
                          </div>
                          {exp.technologies && (
                            <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg">
                              <h5 className="font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                                【使用技術】
                              </h5>
                              <div className="space-y-4">
                                {Object.entries(exp.technologies).map(([category, techs], index) => (
                                  <div key={index}>
                                    <h6 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">{category}</h6>
                                    <div className="flex flex-wrap gap-2">
                                      {techs.map((tech, i) => (
                                        <span
                                          key={i}
                                          className={`inline-block text-sm font-medium px-2.5 py-0.5 rounded ${getCategoryColor(category)}`}
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                              【実績】
                            </h5>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-gray-600 dark:text-gray-300">{achievement}</li>
                              ))}
                            </ul>
                          </div>
                          {exp.link && (
                            <div className="mt-4">
                              <Link 
                                href={exp.link} 
                                target="_blank" 
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                              >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                                {exp.link}
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}