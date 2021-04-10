# mariadb-test

[Zenn の記事](https://zenn.dev/kyome/articles/409265f62ad4eb)があります。

## 事前準備

- Node.js および npm をインストールしておく
- Docker および Docker Compose をインストールしておく

## ローカル環境での動作確認

1. 最初に`node_modules`をインストールする

   `$ npm install`

2. Docker ですでにコンテナーが起動していないか確認

   `$ npm run dcps`

3. コンテナーを起動

   `$ npm run dcup`

4. テストを実行(うまく起動していれば jest のテストが実行されるはず）

   `$ npm run test`

5. コンテナーを停止

   `$ npm run dcdown`

## GitHub Actions 上での動作確認

develop ブランチへの push で Action が動くようにしてあります。
