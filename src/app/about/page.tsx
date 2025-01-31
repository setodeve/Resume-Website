"use client";

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../../components/Header';

config.autoAddCss = false;

export default function About() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div className="dark font-sans">
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-gray-500 dark:text-gray-300">
          <Header />
          <main className="mx-auto max-w-3xl p-4 selection:bg-black text-gray-500 dark:text-gray-300">
            <section className="mt-12 text-gray-500 dark:text-gray-300">
              <h2 className="text-3xl font-bold">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                職務経歴
              </h2>
              <hr className="h-px mt-2 mb-5 bg-yellow-400 border-0" />
              
              <div className="card rounded my-2 p-5 shadow-sm shadow-black/30 dark:bg-neutral-800">
                <div className="flex mb-1 font-bold text-lg">
                  <h3>P社 : 2024/8 - 現在</h3>
                </div>
                <div className="flex mb-1 text-md">
                  <h3>職種 : Webエンジニア</h3>
                </div>
                <div className="my-2">
                  <div>【プロジェクト概要】: 販売促進アプリ開発</div>
                  <div>【業務内容】:
                    <ul className="list-disc ml-8">
                      <li>DB設計</li>
                      <li>API設計</li>
                      <li>Django テンプレートを使用した管理画面設計</li>
                      <li>統合テスト、ユニットテスト作成</li>
                      <li>Swaggerを使用したドキュメント作成</li>
                    </ul>
                  </div>
                  <div>【使用技術】:
                    <ul className="list-disc ml-8">
                      <li>Python, Django</li>
                      <li>HTML, Bootstrap, Vue, JavaScript</li>
                      <li>MySQL, DynamoDB, S3</li>
                      <li>Redis, Minio, Docker</li>
                      <li>Swagger</li>
                    </ul>
                  </div>
                  <div>【実績】:
                    <ul className="list-disc ml-8">
                      <li>ユニットテストを充実させ、品質向上に貢献。</li>
                      <li>Docker環境設定の作成し、環境構築の時間を短縮。</li>
                      <li>ドキュメントを作成し、開発メンバー間のコミュニケーションを効率化。</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="card rounded my-2 p-5 shadow-sm shadow-black/30 dark:bg-neutral-800">
                <div className="flex mb-1 font-bold text-lg">
                  <h3>Yamada UIメンテナ : 2024/2 - 2024/9</h3>
                </div>
                <div className="my-2">
                  <div>【プロジェクト概要】: ReactベースのUIコンポーネントライブラリ「Yamada UI」のメンテナ</div>
                  <div>【貢献内容】:
                    <ul className="list-disc ml-8">
                      <li>アクセシビリティの改善</li>
                      <li>ドキュメントの整備と改善</li>
                      <li>Issue対応とレビュー参加</li>
                    </ul>
                  </div>
                  <div>【使用技術】:
                    <ul className="list-disc ml-8">
                      <li>TypeScript, React</li>
                      <li>Storybook</li>
                      <li>Vitest</li>
                    </ul>
                  </div>
                  <div>【成果】:
                    <ul className="list-disc ml-8">
                      <li>ドキュメント整備やアクセシビリティ対応による利便性向上</li>
                    </ul>
                  </div>
                  <br />
                  <div>
                    <a href="https://github.com/yamada-ui/yamada-ui" target="_blank" className="text-blue-600">https://github.com/yamada-ui/yamada-ui</a>
                  </div>
                </div>
              </div>
              
              <div className="card rounded my-2 p-5 shadow-sm shadow-black/30 dark:bg-neutral-800">
                <div className="flex mb-1 font-bold text-lg">
                  <h3>F社 : 2018/4-2023/10</h3>
                </div>
                <div className="flex mb-1 text-md">
                  <h3>職種 : システムエンジニア</h3>
                </div>
                <div className="text-lg dark:text-gray-300">2022-2023</div>
                <div className="my-2">
                  <div>【プロジェクト概要】: 車載組込システム開発(車載通信系)</div>
                  <div>【業務内容】: 設計、実装、テスト</div>
                  <div>【実績】:
                    <ul className="list-disc ml-8">
                      <li>自主的なテスト補助ツール開発</li>
                      <li>成果物のエビデンス運用方法提案による品質向上</li>
                    </ul>
                  </div>
                </div>
                <div className="text-lg dark:text-gray-300">2021-2022</div>
                <div className="my-2">
                  <div>【プロジェクト概要】: 車載組込システム開発(車載安全系)</div>
                  <div>【業務内容】: PL、顧客折衷、設計、実装、テスト</div>
                  <div>【実績】:
                    <ul className="list-disc ml-8">
                      <li>週1回の顧客ミーティング</li>
                      <li>要件~テストフェーズについて顧客折衷</li>
                      <li>メンバー2人に対するマネジメント</li>
                    </ul>
                  </div>
                </div>
                <div className="text-lg">2018-2021</div>
                <div className="my-2">
                  <div>【プロジェクト概要】: 車載組込システム開発(車載安全系)</div>
                  <div>【業務内容】: 設計、実装、テスト、新人研修担当</div>
                  <div>【実績】:
                    <ul className="list-disc ml-8">
                      <li>テスト実施手順のマニュアル化</li>
                      <li>VBAによるテスト補助ツール開発</li>
                      <li>新入社員へのメンター</li>
                    </ul>
                  </div>
                </div>
                <div>【使用技術】:
                  <ul className="list-disc ml-8">
                    <li>C, VBA</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
} 