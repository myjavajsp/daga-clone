import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SearchIcon from '@mui/icons-material/Search';
import Layout from '../components/Layout';

/**
 * MusicPage — 音乐解析页（骨架页面）
 */
export default function MusicPage() {
  return (
    <Layout>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 3,
          mb: 3,
          py: { xs: 5, md: 7 },
          px: 3,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            <MusicNoteIcon sx={{ color: '#fff', fontSize: 40, mr: 1, opacity: 0.9 }} />
            <Typography
              variant="h3"
              sx={{
                color: '#fff',
                fontWeight: 800,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              }}
            >
              音乐解析
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 400,
              fontSize: { xs: '0.9rem', sm: '1.05rem' },
            }}
          >
            在线搜索和试听全网音乐
          </Typography>
        </Box>
      </Box>

      {/* 开发中提示 */}
      <Paper
        elevation={0}
        sx={{
          p: 6,
          borderRadius: 3,
          border: '1px solid #e0e0e0',
          mb: 3,
          textAlign: 'center',
          bgcolor: '#fdf8ff',
        }}
      >
        <HeadphonesIcon sx={{ fontSize: 64, color: '#f5576c', mb: 2, opacity: 0.6 }} />
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: '#f5576c' }}>
          功能开发中
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400, mx: 'auto' }}>
          音乐解析功能正在紧锣密鼓开发中，敬请期待！
        </Typography>
      </Paper>

      {/* 骨架输入框 */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 3,
          border: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          🎵 音乐搜索
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            fullWidth
            placeholder="输入歌曲名或歌手名（功能开发中…）"
            disabled
            size="medium"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'text.disabled', mr: 1 }} />,
            }}
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="contained"
            disabled
            sx={{
              minWidth: { xs: '100%', sm: 140 },
              py: 1.5,
              fontWeight: 600,
            }}
          >
            搜索
          </Button>
        </Box>
      </Paper>
    </Layout>
  );
}
