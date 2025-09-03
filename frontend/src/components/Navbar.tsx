import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { sectionIds } from './sectionIds';

const Navbar = () => {
  const [currPage, setCurrPage] = React.useState('HOME');
  const [isScrolled, setIsScrolled] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '5rem',
        display: 'flex',
        paddingRight: '4rem',
        paddingTop: '2rem',
        justifyContent: 'end',
        boxSizing: 'border-box',
        position: 'fixed',
        gap: 2,
        zIndex: '10',
      }}
    >
      {sectionIds.map((section, i) => (
        <MenuItem
          key={i}
          onClick={() => {
            setCurrPage(section);
            scrollToSection(section);
          }}
          sx={{
            bgcolor: section === currPage ? 'rgba(0, 0, 0, 0.9)' : 'rgba(244, 241, 236, 0.8)',
            color: section === currPage ? '#E0D3FF' : 'black',
            borderRadius: '3rem',
            boxSizing: 'border-box',
            paddingX: '2.5rem',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            '&.MuiMenuItem-root': {
              '&:hover': {
                backgroundColor: 'rgba(180, 158, 235, 0.9)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              },
            },
          }}
        >
          <Typography variant="h5" textAlign="center" fontWeight={'bold'}>
            {section}
          </Typography>
        </MenuItem>
      ))}
    </Box>
  );
};
export default Navbar;
