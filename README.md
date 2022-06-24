# Nintendo Switch - 大人気ゲーム

### Nintendo Switch 大人気ゲームのランディングページ

## フロントエンドスタック

- パッケージマネージャー:
  - yarn - https://classic.yarnpkg.com/lang/en/
- フレームワーク:
  - Next JS - https://nextjs.org/
  - React - https://ja.reactjs.org/
  - Typescript - https://www.typescriptlang.org/ja/
- スタイル:
  - styled-components - https://styled-components.com/
  - styled-normalize - https://github.com/sergeysova/styled-normalize
- アニメーション
  - Framer-Motion - https://www.framer.com/api/motion
  - react-intersection-observer - https://github.com/thebuilder/react-intersection-observer
- アプリケーションデータ管理:
  - 静的 JSON データ
  - getStaticProps & getStaticPath - https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
    - 静的に生成されたデータの実装
    - より良い SEO のための実装

## 開発のための指示

<span style="color: red;">**NOTE**</span>: このガイドは、 `node`と` yarn`がローカルにインストールされていることを前提としています

```
 yarn v1.22.17
 node v14.18.1
```

---

1 - リポジトリのクローンを作成（またはダウンロード）

```bash
$ git clone git@github.com:IrvingArmenta/n-todo-app.git
```

2 - フォルダに移動します

```bash
$ cd ./daininki-gemu
```

3 - 依存関係をインストールする (yarn）

```bash
$ yarn install
```

4 - `yarn dev`を実行し、開発環境`[localhost：3000]`を開きます

```bash
$ yarn dev
```

ハッピーコーディング！

その他の利用可能なスクリプトについては、以下を参照してください:

## 🚀 CLI コマンド

- `yarn install`: デペンデンシーインストールします

- `yarn dev`: ポート 3000 で開発サーバーを実行します

- `yarn start`: 本番サーバーを実行する

- `yarn build`: NextJS アプリケーションをビルドする

- `yarn lint`: eslint を使用してすべての typescript ファイルをリントします
- `yarn type-check`: typescript 関連のタイプを確認してください

デプロイ URL  
https://daininki-gemu.vercel.app/
