import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const items = [
  {
    id: 1,
    content: 'A Computer Science Graduate',
  },
  {
    id: 2,
    content: 'A Frontend Enthusiast',
  },
  {
    id: 3,
    content: 'idk',
  },
];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box sx={{ mb: '2rem' }}>
      {/* <AnimatePresence> */}
      <motion.div
        key={items[index].id}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ ease: 'easeInOut' }}
        // style={{ position: 'absolute' }}
      >
        <Typography
          //   onMouseEnter={() => {
          //     setIsHovered(true);
          //   }}
          //   onMouseLeave={() => {
          //     setIsHovered(false);
          //   }}
          variant="h4"
          fontWeight="bold"
          id="body"
          sx={{
            cursor: 'none',
          }}
        >
          {items[index].content}
        </Typography>
      </motion.div>
      {/* </AnimatePresence> */}
    </Box>
  );
};

export default RotatingText;
