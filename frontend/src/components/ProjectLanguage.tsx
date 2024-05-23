// you extracted this into its own component so it can have its own hook

import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { useProjectStore } from './Store';
type Props = {
  children: React.ReactNode;
};
const ProjectLanguage = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: '5rem',
        height: '5rem',
        color: 'white',
        border: 'black solid 1rem',
      }}
    >
      {children}
    </Box>
  );
};

export default ProjectLanguage;
