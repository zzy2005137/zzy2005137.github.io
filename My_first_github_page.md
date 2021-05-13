# My First Github Page

> 记录github pages 入门使用过程

不得不说，github的guide做的是真的好，不管是页面还是内容，简洁好看易懂。希望能够学到一点其写作与排版的风格。

**构建属于自己的 github page 主要分为两步 :**

+ 创建github.io仓库
+ 克隆项目，本地编写文档，上传仓库

## 创建github page 仓库

按照[Guide__Getting Started with GitHub Pages](https://guides.github.com/features/pages/)一步步操作

+ 创建仓库 `username.github.io`
+ 进入`setting`，选择主题 `choose a theme`,  然后`commit`
+ 浏览器输入地址`https://username.github.io`即可进入主页，默认README.md

## 本地编写文档，上传仓库

参考[pages.github.com](https://pages.github.com/)

+ clone

  ``` sehll
  git clone https://github.com/username/username.github.io
  ```

+ edit 

  ``` shell
  cd username.github.io
  可添加html或md文档
  ```

+ push

  ``` shell
  git add --all
  git commit -m "Initial commit"
  git push -u origin main
  ```

## Connecting to github with SSH

参考[GitHub Docs_Connecting to github with SSH](https://docs.github.com/en/github/authenticating-to-github/about-ssh)

> Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit.
