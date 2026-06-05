import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';

import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import InterfacesManage from './pages/admin/InterfacesManage';
import AdsManage from './pages/admin/AdsManage';
import LinksManage from './pages/admin/LinksManage';
import SettingsManage from './pages/admin/SettingsManage';
import GuideManage from './pages/admin/GuideManage';
import FaqManage from './pages/admin/FaqManage';

export default function App() {
  return (
    <Routes>
      {/* 前台 */}
      <Route path="/" element={<HomePage />} />
      <Route path="/music" element={<MusicPage />} />

      {/* 后台登录（隐藏路径） */}
      <Route path="/6n1x5ltwujr5/login" element={<AdminLogin />} />

      {/* 后台管理（嵌套路由 + 侧边栏布局） */}
      <Route path="/6n1x5ltwujr5" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="interfaces" element={<InterfacesManage />} />
        <Route path="ads" element={<AdsManage />} />
        <Route path="links" element={<LinksManage />} />
        <Route path="settings" element={<SettingsManage />} />
        <Route path="guide" element={<GuideManage />} />
        <Route path="faq" element={<FaqManage />} />
      </Route>
    </Routes>
  );
}
