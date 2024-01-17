# Resume-Website

## 概要
このプロジェクトは、職務経歴を紹介するための静的サイトです。

VPSを使用し、独自ドメインとSSL証明書でセキュアなアクセスを提供しています。

## URL
https://resume.setodeve.tech/

## 技術スタック
<table>
<tr>
  <th>カテゴリ</th>
  <th>技術スタック</th>
</tr>
<tr>
  <td rowspan=2>フロントエンド</td>
  <td>HTML</td>
</tr>
<tr>
  <td>フレームワーク : Tailwind CSS</td>
</tr>
<tr>
  <td rowspan=3>インフラ</td>
  <td>さくらインターネットVPS</td>
</tr>
<tr>
  <td>Nginx</td>
</tr>
<tr>
  <td>Ubuntu</td>
</tr>
<tr>
  <td rowspan=3>その他</td>
  <td>自動デプロイ : Github Actions</td>
</tr>
<tr>
  <td>SSL/TLS証明書関連 : Certbot</td>
</tr>
</table>

## デモ
<img width=50% src="https://github.com/setodeve/Video-Compressor-Service/assets/83833293/064297a6-e566-4cbc-b464-315dde554567" alt="">

## TailWind CSSビルド方法
```bash
 # Tailwind CSSがインストールできていない初回時
 npm install -D tailwindcss
 npx tailwindcss init

# 初回以外
 npx tailwindcss -i ./input.css -o ./output.css --watch
```