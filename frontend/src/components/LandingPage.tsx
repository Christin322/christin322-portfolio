// import React from 'react';
// import DiscordService from './services/DiscordService';
// import useForm from "./hook/useForm";
// import NavBar from './NavBar';
// let username = "Stephen";
// import Bees from './Bees.png';
// import { useNavigate } from 'react-router-dom';

// import DarkBackground from './assets/DarkBackground.png';
// import LightBackground from './assets/LightBackground.png';
// import { useTheme } from './ThemeContext';
'use client';
import useMousePosition from '../utils/useMousePosition';
import { Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import mask from './assets/mask.svg';
import RotatingText from './RotatingText';
import Exterior from './assets/exterior.svg';
import Interior from './assets/interior.svg';

const LandingPage = () => {
  const theme = useTheme();

  //   const navigate = useNavigate();
  //   const { mode } = useTheme();
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  const maskSize = isHovered ? 300 : 40;

  return (
    <>
      <Box
        id="landing-section-background"
        sx={{
          width: '100vw',
          height: '90vh',
          bgcolor: '#F4F1EC',
          // cursor: 'none',
          // display: 'flex',
          // justifyContent: 'center',
          // position: 'relative',
          // alignItems: 'end',
          boxSizing: 'border-box',
          // padding: '1rem',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {/* text */}
          <Box
            id="text-container"
            sx={{
              flex: 1,
              boxSizing: 'border-box',
              // position: 'absolute',
              // bottom: 0,
              // left: 0,
              // justifySelf: 'end',
              // marginBottom: 'auto',
              textAlign: 'end',
              // paddingLeft: '1rem',
            }}
          >
            <Typography
              variant="h2"
              id="body"
              fontWeight="bold"
              sx={{
                cursor: 'none',
              }}
            >
              Hello, I'm
            </Typography>
            <Typography
              variant="h1"
              id="body"
              fontWeight="bold"
              sx={{
                cursor: 'none',
              }}
            >
              CHRISTINE <br />
              PHUNG
            </Typography>

            <RotatingText></RotatingText>
          </Box>
          <Box
            id="house-image"
            sx={{
              flex: 1,
              height: '60vh',
              backgroundImage: `url(${Exterior})`,
              backgroundPositionX: 'left',
              backgroundPositionY: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Box>
      </Box>
      {/* mask */}
      <Box
        id="landing-section-background-mask"
        component={motion.div}
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut' }}
        sx={{
          width: '100vw',
          height: '90vh',
          bgcolor: '#B49EEB',
          // cursor: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          // alignItems: 'end',
          boxSizing: 'border-box',
          // padding: '1rem',
          top: 0,
          // mask stuff
          maskImage: `url(${mask})`,
          maskRepeat: 'no-repeat',
          maskSize: `${maskSize}px`,
          maskPosition: '50%',
          color: '#F4F1EC',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <Box
            id="text-container"
            sx={{
              flex: 1,
              boxSizing: 'border-box',
              textAlign: 'end',
            }}
          >
            <Typography
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              variant="h2"
              id="body"
              fontWeight="bold"
              sx={{
                width: 'fit-content',
                cursor: 'none',
                marginLeft: 'auto',
              }}
            >
              Hello, I'm
            </Typography>
            <Typography
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              variant="h1"
              id="body"
              fontWeight="bold"
              sx={{
                width: 'fit-content',
                cursor: 'none',
                marginLeft: 'auto',
              }}
            >
              CHRISTINE <br />
              PHUNG
            </Typography>

            <RotatingText></RotatingText>
          </Box>
          {/* fix the masking for this */}
          <Box
            id="house-container-mask"
            sx={{
              flex: 1,
              height: '60vh',
            }}
          >
            <Box
              id="house-image-mask"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              sx={{
                width: '30vw',
                height: '60vh',
                backgroundImage: `url(${Interior})`,
                backgroundPositionX: 'left',
                backgroundPositionY: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
