import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const NAV_ITEMS = [
  { label: '视频解析', path: '/', icon: <MovieIcon /> },
  { label: '音乐解析', path: '/music', icon: <MusicNoteIcon /> },
];

/**
 * Header — 顶部导航栏（深色主题，仿 daga.cc 风格）
 */
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.3)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>
            {/* Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                mr: 4,
              }}
              onClick={() => navigate('/')}
            >
              <MovieIcon sx={{ mr: 1, color: '#42a5f5', fontSize: 28 }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #42a5f5 0%, #64b5f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                全民影视VIP解析
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.path}
                  startIcon={item.icon}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: isActive(item.path) ? '#42a5f5' : 'rgba(255,255,255,0.8)',
                    backgroundColor: isActive(item.path) ? 'rgba(66,165,245,0.12)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                    },
                    px: 2,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)', minWidth: 200 },
        }}
      >
        <List sx={{ pt: 2 }}>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
                sx={{
                  color: isActive(item.path) ? '#42a5f5' : 'rgba(255,255,255,0.8)',
                }}
              >
                <Box sx={{ mr: 1, display: 'flex' }}>{item.icon}</Box>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
