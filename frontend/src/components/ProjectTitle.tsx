// you extracted this into its own component so it can have its own hook

import { Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { useProjectStore } from './Store';
type Props = {
  children: React.ReactNode;
  id: string;
};
const ProjectTitle = ({ children, id }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-44.5% 0px -50% 0px' });

  const setInViewProject = useProjectStore((state) => state.setInViewProject);
  useEffect(() => {
    // setInViewElement
    if (isInView) {
      setInViewProject(id);
    }
  }, [id, isInView, setInViewProject]);

  return (
    <Typography
      component={motion.p}
      variant="h4"
      fontWeight={'bold'}
      ref={ref}
      sx={{
        width: 'fit-content',
        opacity: isInView ? '1' : '0.3',
        color: '#8C6ED9',
      }}
    >
      {children}
    </Typography>
  );
};

export default ProjectTitle;
