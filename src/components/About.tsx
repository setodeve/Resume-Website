"use client";

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import nextConfig from '../../next.config';

config.autoAddCss = false;

const BASE_PATH = nextConfig.basePath || "";

interface Experience {
  id: number;
  company: string;
  period: string;
  position?: string;
  projectOverview: string;
  responsibilities: string[] | string;
  technologies: string[];
  achievements: string[];
  link?: string;
  experiences?: {
    period: string;
    projectOverview: string;
    responsibilities: string;
    achievements: string[];
  }[];
}

export default function About() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function fetchExperiences() {
      const response = await fetch(`${BASE_PATH}/experiences.json`);
      const data = await response.json();
      setExperiences(data);
    }
    fetchExperiences();
  }, []);

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <section className="text-gray-500 dark:text-gray-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <FontAwesomeIcon icon={faBuilding} className="mr-2" />
            職務経歴
          </h2>
          <hr className="h-px mb-5 bg-yellow-400 border-0" />
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  {experience.company} : {experience.period}
                </h3>
                {experience.position && (
                  <p className="text-gray-600 dark:text-gray-400">
                    職種 : {experience.position}
                  </p>
                )}
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">【プロジェクト概要】</h4>
                  <p className="mt-1">{experience.projectOverview}</p>
                </div>
                {experience.experiences ? (
                  experience.experiences.map((exp, expIndex) => (
                    <div key={expIndex} className="mt-4 space-y-6">
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{exp.period}</h4>
                      <div className="mt-2 space-y-2">
                        <div>
                          <h5 className="font-semibold text-gray-700 dark:text-gray-200">【業務内容】</h5>
                          <p className="mt-1">{exp.responsibilities}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-700 dark:text-gray-200">【実績】</h5>
                          <ul className="mt-2 space-y-1 list-disc list-inside">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-200">【業務内容】</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        {Array.isArray(experience.responsibilities)
                          ? experience.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))
                          : <li>{experience.responsibilities}</li>}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-200">【使用技術】</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        {experience.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-200">【実績】</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
                {experience.link && (
                  <div className="mt-4">
                    <Link 
                      href={experience.link} 
                      target="_blank" 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {experience.link}
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
} 