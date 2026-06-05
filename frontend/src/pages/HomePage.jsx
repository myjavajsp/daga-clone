import React, { useState, useEffect, useCallback } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import HeroSection from '../components/home/HeroSection';
import PlayerArea from '../components/home/PlayerArea';
import ParseForm from '../components/home/ParseForm';
import RecommendLinks from '../components/home/RecommendLinks';
import GuideSteps from '../components/home/GuideSteps';
import FaqSection from '../components/home/FaqSection';
import AdBanner from '../components/home/AdBanner';
import NoticeBanner from '../components/home/NoticeBanner';

import {
  fetchInterfaces,
  fetchSettings,
  fetchGuide,
  fetchFaq,
  fetchLinks,
  fetchAds,
} from '../api/public';

/**
 * HomePage — 首页主容器，管理所有子组件的数据和状态
 */
export default function HomePage() {
  /* ── 状态 ─────────────────────────────────── */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 公共数据
  const [interfaces, setInterfaces] = useState([]);
  const [settings, setSettings] = useState({});
  const [steps, setSteps] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [links, setLinks] = useState([]);
  const [ads, setAds] = useState([]);

  // 播放器状态
  const [videoUrl, setVideoUrl] = useState('');
  const [currentInterface, setCurrentInterface] = useState(null);

  /* ── 数据加载 ─────────────────────────────── */
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await Promise.allSettled([
        fetchInterfaces(),
        fetchSettings(),
        fetchGuide(),
        fetchFaq(),
        fetchLinks(),
        fetchAds(),
      ]);

      const [
        interfacesRes,
        settingsRes,
        guideRes,
        faqRes,
        linksRes,
        adsRes,
      ] = results;

      if (interfacesRes.status === 'fulfilled' && interfacesRes.value.success) {
        setInterfaces(interfacesRes.value.data || []);
      }
      if (settingsRes.status === 'fulfilled' && settingsRes.value.success) {
        setSettings(settingsRes.value.data || {});
      }
      if (guideRes.status === 'fulfilled' && guideRes.value.success) {
        setSteps(guideRes.value.data || []);
      }
      if (faqRes.status === 'fulfilled' && faqRes.value.success) {
        setFaqs(faqRes.value.data || []);
      }
      if (linksRes.status === 'fulfilled' && linksRes.value.success) {
        setLinks(linksRes.value.data || []);
      }
      if (adsRes.status === 'fulfilled' && adsRes.value.success) {
        setAds(adsRes.value.data || []);
      }

      // 检查是否全部失败
      const allFailed = results.every((r) => r.status === 'rejected');
      if (allFailed) {
        setError('数据加载失败，请检查网络连接后重试');
      }
    } catch (err) {
      console.error('[HomePage] loadData error:', err);
      setError('数据加载失败：' + (err.message || '未知错误'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  /* ── 解析播放回调 ──────────────────────────── */
  const handleParse = useCallback((url, iface) => {
    console.log('[HomePage] handleParse called:', { url: url.substring(0, 50), iface: iface?.name });
    setVideoUrl(url);
    setCurrentInterface(iface);
  }, []);

  // DEBUG
  useEffect(() => {
    console.log('[HomePage] videoUrl:', videoUrl ? videoUrl.substring(0, 50) + '...' : '(empty)');
    console.log('[HomePage] currentInterface:', currentInterface?.name || '(null)');
  }, [videoUrl, currentInterface]);

  /* ── 渲染 ─────────────────────────────────── */
  return (
    <Layout>
      <HeroSection />

      <NoticeBanner message="本工具仅用于学习交流，请勿用于商业用途。所有解析内容版权归原平台所有，请在24小时内删除观看内容。" />

      {loading ? (
        <Loading message="正在加载数据…" />
      ) : error ? (
        <ErrorMessage message={error} onRetry={loadData} />
      ) : (
        <>
          {/* 播放器 + 表单 */}
          <PlayerArea videoUrl={videoUrl} currentInterface={currentInterface} />
          {/* DEBUG: 状态指示器 */}
          <div style={{
            background: videoUrl ? '#1a3a1a' : '#3a1a1a',
            color: '#fff',
            padding: '6px 12px',
            borderRadius: 6,
            marginBottom: 8,
            fontSize: 12,
            fontFamily: 'monospace',
          }}>
            DEBUG: videoUrl={videoUrl ? '✅ 已设置 (' + videoUrl.substring(0, 40) + '...)' : '❌ 空'}
            &nbsp;|&nbsp;
            iface={currentInterface ? '✅ ' + currentInterface.name : '❌ 未选择'}
            &nbsp;|&nbsp;
            iframeSrc={videoUrl && currentInterface ? '✅ 应渲染iframe' : '⏸ 等待输入'}
          </div>
          <ParseForm
            interfaces={interfaces}
            onParse={handleParse}
            loading={loading}
          />

          {/* 推荐工具 */}
          <RecommendLinks links={links} />

          {/* 广告 */}
          <AdBanner ads={ads} />

          {/* 使用说明 */}
          <GuideSteps steps={steps} />

          {/* FAQ */}
          <FaqSection faqs={faqs} />
        </>
      )}
    </Layout>
  );
}
