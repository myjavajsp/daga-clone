#!/bin/bash
echo "========================================"
echo "  全民影视VIP视频解析 - 一键启动"
echo "========================================"
echo "[1/4] 安装后端依赖..."
npm install
echo "[2/4] 安装前端依赖..."
cd frontend && npm install && cd ..
echo "[3/4] 构建前端..."
cd frontend && npm run build && cd ..
echo "[4/4] 初始化数据库并启动服务..."
npm run init-db
echo "========================================"
echo "  启动完成！访问 http://localhost:3001"
echo "========================================"
npm start
