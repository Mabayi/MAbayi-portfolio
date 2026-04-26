# 马建军 - 个人学术主页

这是马建军的个人学术网站，展示教育背景、科研成果、项目经历和荣誉获奖。

## 网站结构

```
self-web/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── script.js      # JavaScript交互
├── images/            # 图片文件夹（放置个人照片等）
├── videos/            # 视频文件夹（放置课程作业视频）
└── projects/          # 项目文件夹（可选，放置项目相关文件）
```

## 如何使用

### 1. 添加视频文件

将你的课程作业视频放入 `videos` 文件夹，并重命名为：
- `harmonyos-demo.mp4` - 鸿蒙应用开发视频
- `pattern-recognition.mp4` - 模式识别项目视频
- `power-load-prediction.mp4` - 电力负荷预测视频

### 2. 添加个人照片（可选）

将个人照片放入 `images` 文件夹，可以在网站中使用。

### 3. 本地预览

直接用浏览器打开 `index.html` 文件即可预览网站。

### 4. 上传到 GitHub 并发布

#### 步骤 1: 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称填写：`你的用户名.github.io` （例如：`majianjun.github.io`）
4. 选择 "Public"（公开）
5. 不要勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

#### 步骤 2: 上传代码到 GitHub

在项目文件夹中打开命令行（PowerShell），执行以下命令：

```bash
git init
git add .
git commit -m "Initial commit: 个人学术网站"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

#### 步骤 3: 启用 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 "Settings"（设置）
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 下选择 "main" 分支
5. 点击 "Save"

等待几分钟后，你的网站就会发布在：`https://你的用户名.github.io`

## 技术栈

- HTML5
- CSS3
- JavaScript
- GitHub Pages

## 联系方式

- 邮箱：majianjun@nxu.edu.cn
- 电话：15729539113

---

© 2025 马建军. All rights reserved.

