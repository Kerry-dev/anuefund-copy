# Description

anuefund-copy
根據目標網址 https://www.anuefund.com/FundSpec/ESG/# 進行切版作業

- 主要框架：Angular
- 樣式框架：ng-bootstrap
- 語言：TypeScript
- 樣式語法：SCSS
- 開發用 Node 版本：v20.11.1

## Requirement

### npm pakeage 主要套件 版本

| Project Name    | Package Name   | Version  | Official Page                                               |
| --------------- | -------------- | -------- | ----------------------------------------------------------- |
| @angular        | cli            | ^17.3.0  | https://angular.io/cli                                      |
| @angular        | core           | ^17.3.0  | https://angular.io/                                         |
| @angular-devkit | core           | ^17.3.0  | https://www.npmjs.com/package/@angular-devkit/build-angular |
| lodash-es       | lodash-es      | ^4.17.21 | https://lodash.com/                                         |
| prettier        | prettier       | ^3.2.5   | https://prettier.io/                                        |
| rxjs            | rxjs           | ~7.8.0   | https://rxjs.dev/                                           |
| typescript      | typescript     | ^5.4.2   | https://www.typescriptlang.org/                             |
| bootstrap       | bootstrap      | ^5.3.2   | https://getbootstrap.com/                                   |
| ng-bootstrap    | ng-bootstrap   | ^16.0.0  | https://ng-bootstrap.github.io/#/home                       |

### npm pakeage global

| Project Name | Package Name | Version | Official Page                                       |
| ------------ | ------------ | ------- | --------------------------------------------------- |
| @angular     | cli          | 17.3.0  | https://github.com/commitizen/cz-cli                |
| commitizen   | cli          | 4.3.0   | https://www.conventionalcommits.org/zh-hant/v1.0.0/ |
| ESLint       | cli          | 8.56.0  | https://eslint.org/                                 |

- IDE : Visual Studio Code
- IDE package:
  - Angular Essentials (Version 13)(https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

## Angular CLI

成員產生方式皆使用 Angular CLI 完成 (https://angular.io/cli/generate)

## Git Flow

Git flow 分為五種分支功能，分別有 master 、develop 、hotfix、release 及 feature ，該五種分支分為兩大類，如以下分類：

- 長期分支 - master 分支、develop 分支

  - 上述分支會平行存在於整個專案的 Git Flow 週期中，透過 Git 機制作保護，整個專案的功能分支皆由該兩項分支開出。

- 短期分支 - hotfix 分支、release 分支、feature 分支

  - 當完成專案後，這些更新的版本都會被合併進 main(hotfix、release) 或 develop(feature) 分支 ，之後就會被刪除掉。

## 安裝相依性套件

- 使用 NPM 作為套件管理工具

```
npm install
```

### Development server

- 啟動開發伺服器，本專案在檔案變更後重新整理

```
npm run start
```


### Running unit tests

- 執行單元測試腳本

```
npm run test
```

### Build

- 編譯專案，預設靜態黨路徑為 'dist/'

```
npm run build
```
