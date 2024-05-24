import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '800px',
        bgcolor: 'red',
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 'calc(100vh + 800px)',
          top: '100vh',
          bgcolor: 'blue',
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 'calc(100vh - 800px)',
            height: '800px',
            bgcolor: 'blue',
          }}
        >
          {/* contents */}
          <Box sx={{ bgcolor: 'blue' }}>hello idk more content</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
