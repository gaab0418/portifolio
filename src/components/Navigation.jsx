import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { navigationLinks } from '../data/portfolioData';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backdropFilter: 'blur(12px)',
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.7)' 
    : 'rgba(5, 1, 13, 0.3)',
  borderBottom: `1px solid ${theme.custom.palette.border.main}`,
  boxShadow: 'none',
}));

const StyledLogo = styled(Typography)(({ theme }) => ({
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 1.1,
  letterSpacing: '0.08em',
  textDecoration: 'none',
  color: 'inherit',
}));

const StyledNavLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontWeight: 500,
  position: 'relative',
  paddingBottom: '0.25rem',
  transition: 'color 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 0,
    height: '2px',
    background: theme.custom.palette.gradient.accent,
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: theme.palette.text.primary,
    '&::after': {
      width: '100%',
    },
  },
}));

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledAppBar>
      <Toolbar sx={{ justifyContent: 'space-between', padding: '1.2rem 6vw !important' }}>
        <StyledLogo component="a" href="#hero">
          <span>Gabriel</span>
          <span>Chiarelli</span>
        </StyledLogo>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1.75rem' }}>
          {navigationLinks.map((link) => (
            <StyledNavLink key={link.id} href={`#${link.id}`}>
              {link.label}
            </StyledNavLink>
          ))}
        </Box>

        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: '0.35rem' }}
          onClick={() => setIsOpen(true)}
          aria-label="Alternar menu"
        >
          <Box
            component="span"
            sx={{
              width: '2rem',
              height: '2px',
              background: 'currentColor',
              transition: 'all 0.3s',
            }}
          />
          <Box
            component="span"
            sx={{
              width: '2rem',
              height: '2px',
              background: 'currentColor',
              transition: 'all 0.3s',
            }}
          />
          <Box
            component="span"
            sx={{
              width: '2rem',
              height: '2px',
              background: 'currentColor',
              transition: 'all 0.3s',
            }}
          />
        </IconButton>

        <Drawer
          anchor="right"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          PaperProps={{
            sx: {
              background: (theme) => theme.custom.palette.background.glass,
              backdropFilter: 'blur(12px)',
              border: (theme) => `1px solid ${theme.custom.palette.border.glass}`,
              borderRadius: '18px',
              margin: '1rem',
              padding: '1.5rem',
              minWidth: '200px',
            },
          }}
        >
          <List>
            {navigationLinks.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  sx={{
                    borderRadius: '8px',
                    '&:hover': {
                      background: (theme) => theme.custom.palette.background.muted,
                    },
                  }}
                >
                  {link.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
}

