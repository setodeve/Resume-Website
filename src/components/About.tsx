"use client";

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link'
import { motion } from 'framer-motion';

config.autoAddCss = false;

export default function About() {
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
          <motion.div
            className="card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">P社 : 2024/8 - 現在</h3>
              <p className="text-gray-600 dark:text-gray-400">職種 : Webエンジニア</p>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【プロジェクト概要】</h4>
                <p className="mt-1">販売促進アプリ開発</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【業務内容】</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>DB設計</li>
                  <li>API設計</li>
                  <li>Django テンプレートを使用した管理画面設計</li>
                  <li>統合テスト、ユニットテスト作成</li>
                  <li>Swaggerを使用したドキュメント作成</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【使用技術】</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Python, Django</li>
                  <li>HTML, Bootstrap, Vue, JavaScript</li>
                  <li>MySQL, DynamoDB, S3</li>
                  <li>Redis, Minio, Docker</li>
                  <li>Swagger</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【実績】</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>ユニットテストを充実させ、品質向上に貢献。</li>
                  <li>Docker環境設定の作成し、環境構築の時間を短縮。</li>
                  <li>ドキュメントを作成し、開発メンバー間のコミュニケーションを効率化。</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">Yamada UIメンテナ : 2024/2 - 2024/9</h3>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【プロジェクト概要】</h4>
                <p className="mt-1">ReactベースのUIコンポーネントライブラリ「Yamada UI」のメンテナ</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【貢献内容】</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>アクセシビリティの改善</li>
                  <li>ドキュメントの整備と改善</li>
                  <li>Issue対応とレビュー参加</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【使用技術】</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>TypeScript, React</li>
                  <li>Storybook</li>
                  <li>Vitest</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【成果】</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>ドキュメント整備やアクセシビリティ対応による利便性向上</li>
                </ul>
              </div>
              <div className="mt-4">
                <Link 
                  href="https://github.com/yamada-ui/yamada-ui" 
                  target="_blank" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  https://github.com/yamada-ui/yamada-ui
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">F社 : 2018/4-2023/10</h3>
              <p className="text-gray-600 dark:text-gray-400">職種 : システムエンジニア</p>
            </div>
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">2022-2023</h4>
                <div className="mt-2 space-y-2">
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【プロジェクト概要】</h5>
                    <p className="mt-1">車載組込システム開発(車載通信系)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【業務内容】</h5>
                    <p className="mt-1">設計、実装、テスト</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【実績】</h5>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>自主的なテスト補助ツール開発</li>
                      <li>成果物のエビデンス運用方法提案による品質向上</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">2021-2022</h4>
                <div className="mt-2 space-y-2">
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【プロジェクト概要】</h5>
                    <p className="mt-1">車載組込システム開発(車載安全系)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【業務内容】</h5>
                    <p className="mt-1">PL、顧客折衷、設計、実装、テスト</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【実績】</h5>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>週1回の顧客ミーティング</li>
                      <li>要件~テストフェーズについて顧客折衷</li>
                      <li>メンバー2人に対するマネジメント</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">2018-2021</h4>
                <div className="mt-2 space-y-2">
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【プロジェクト概要】</h5>
                    <p className="mt-1">車載組込システム開発(車載安全系)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【業務内容】</h5>
                    <p className="mt-1">設計、実装、テスト、新人研修担当</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-200">【実績】</h5>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>テスト実施手順のマニュアル化</li>
                      <li>VBAによるテスト補助ツール開発</li>
                      <li>新入社員へのメンター</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">【使用技術】</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>C, VBA</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 