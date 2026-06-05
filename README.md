# 全民影视VIP视频解析

仿 daga.cc 的 VIP 视频在线解析平台，支持腾讯视频/优酷/爱奇艺等主流平台VIP视频免费解析播放。

## 技术栈
- 前端：Vite + React 18 + MUI v5 + Tailwind CSS + React Router
- 后端：Node.js + Express + SQLite (sql.js)
- 认证：JWT

## 快速启动

1. 安装依赖
   cd daga-clone
   npm install
   cd frontend && npm install && cd ..

2. 初始化数据库
   npm run init-db

3. 构建前端
   cd frontend && npm run build && cd ..

4. 启动服务
   npm start

5. 浏览器访问
   前台首页: http://localhost:3001
   后台管理: http://localhost:3001/admin/login

## 默认管理员
用户名: admin
密码: admin123

## 项目结构
├── server/          # 后端 Express API
├── frontend/        # 前端 React 应用
├── data/            # SQLite 数据库文件
└── package.json     # 根配置
