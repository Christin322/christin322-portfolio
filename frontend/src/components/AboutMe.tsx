import React, { useRef } from 'react';
import logo from './logo.svg';
// import './App.css';
// import Pages from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useScroll, motion } from 'framer-motion';

function AboutMe() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 2', '1.33 1'],
  });
  console.log(scrollYProgress);
  return (
    <Box
      sx={{
        width: '100vw',
        height: '90vh',
        bgcolor: '#F4F1EC',
        // cursor: 'none',
        display: 'flex',
        justifyContent: 'center',
        // position: 'relative',
        alignItems: 'start',
        boxSizing: 'border-box',
        // padding: '1rem',
      }}
    >
      {/* the 'paper' */}
      <Box
        component={motion.div}
        ref={ref}
        style={{ scaleX: scrollYProgress }}
        sx={{
          boxSizing: 'border-box',
          padding: '2rem',
          bgcolor: '#8C6ED9',
          width: '90vw',
          height: '80vh',
          border: 'solid 2px black',
        }}
      >
        {/* the content inside the white border */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            border: 'solid 2px white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
          }}
        >
          <Box>
            {/* about me description */}
            {/* floor plan */}
          </Box>
          <Box sx={{ display: 'flex', borderTop: 'solid 2px white' }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                borderRight: 'solid 2px white',
                paddingX: '1rem',
              }}
            >
              ABOUT ME
            </Typography>
            <Box sx={{ paddingX: '1rem', borderRight: 'solid 2px white' }}>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  // fontWeight: 'bold',
                  // borderTop: 'solid 2px white',
                }}
              >
                CHRISTINE
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  // fontWeight: 'bold',
                  marginX: '-1rem',
                  borderTop: 'dashed 2px white',
                  paddingX: '1rem',
                }}
              >
                PHUNG
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
