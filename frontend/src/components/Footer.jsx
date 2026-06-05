import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

/**
 * Footer — 页脚
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 4,
        background: 'linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%)',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        {/* 友情链接 */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2, flexWrap: 'wrap' }}>
          <Link href="#" color="text.secondary" underline="hover" fontSize="0.875rem">
            视频解析
          </Link>
          <Link href="#" color="text.secondary" underline="hover" fontSize="0.875rem">
            音乐解析
          </Link>
          <Link href="#" color="text.secondary" underline="hover" fontSize="0.875rem">
            使用帮助
          </Link>
          <Link href="#" color="text.secondary" underline="hover" fontSize="0.875rem">
            关于我们
          </Link>
        </Box>

        {/* SEO 关键词 */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mb: 1, fontSize: '0.75rem' }}
        >
          全民vip | 视频解析 | vip解析 | 腾讯视频 | 优酷 | 爱奇艺 | 免费观看
        </Typography>

        {/* 版权 */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ fontSize: '0.75rem' }}
        >
          © {currentYear} 全民影视VIP视频解析 | 仅供学习交流使用
        </Typography>

        {/* 备案号占位 */}
        <Typography
          variant="body2"
          color="text.disabled"
          align="center"
          sx={{ mt: 0.5, fontSize: '0.7rem' }}
        >
          备案号：粤ICP备XXXXXXXX号-1
        </Typography>
      </Container>
    </Box>
  );
}
