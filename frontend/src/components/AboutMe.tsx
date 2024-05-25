import React, { useRef, useState } from 'react';
import logo from './logo.svg';
// import './App.css';
// import Pages from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useScroll, motion } from 'framer-motion';
import Exploded from './assets/exploded.svg';
import LivingRoom from './assets/livingRoom.svg';
import Bedroom from './assets/bedroom.svg';
import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';
import { LinkedinPlain } from 'devicons-react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Github from './assets/square-github';

import CircleIcon from '@mui/icons-material/Circle';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function AboutMe() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 2', '1.33 1'],
  });
  console.log(scrollYProgress);
  const [isFirstFloor, setIsFirstFloor] = useState(true);

  return (
    <Box
      id="ABOUT ME"
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: '#F4F1EC',
        boxSizing: 'border-box',
        padding: '5rem',
        pt: '10rem',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          bgcolor: '#F4F1EC',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: 'repeat(8, 1fr)',
          width: '100%',
          height: '100%',
        }}
      >
        {/* about me info */}
        <Box
          id="about-me-container"
          sx={{
            gridRow: '2/8',
            gridColumn: '4/9',
            bgcolor: 'black',
            boxSizing: 'border-box',
            borderRadius: '0 4rem 4rem 0',
          }}
        ></Box>
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '4/9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // zIndex: '10',
          }}
        >
          {' '}
          <Typography
            variant="h1"
            sx={{
              color: '#F4F1EC',
              mixBlendMode: 'exclusion',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            ABOUT ME
          </Typography>
        </Box>
        <Box
          sx={{
            gridRow: '3/7',
            gridColumn: '4/9',
            boxSizing: 'border-box',
            paddingX: '5rem',
          }}
        >
          <Card sx={{ width: '100%', backgroundColor: 'black' }}>
            <CardActionArea
              onClick={() => {
                setIsFirstFloor(true);
              }}
            >
              <CardContent
                sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <CircleIcon
                  sx={{
                    color: '#E0D3FF',
                    opacity: isFirstFloor ? 1 : 0,
                    width: '3rem',
                    height: '3rem',
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: isFirstFloor ? '#E0D3FF' : 'white',
                  }}
                >
                  Hello! My name is Christine Phung, and I am (almost) a
                  Computer Science Graduate from UNSW. I am strongly passionate
                  in Front-end development, as I truly enjoy and appreciate the
                  visual design of aspect of things. However I do also enjoy
                  Backend as I find it fun to challenge myself and seek
                  opportunities to expand my technical expertise.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: '100%', backgroundColor: 'black' }}>
            <CardActionArea
              onClick={() => {
                setIsFirstFloor(false);
              }}
            >
              <CardContent
                sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <CircleIcon
                  sx={{
                    color: '#E0D3FF',
                    opacity: !isFirstFloor ? 1 : 0,
                    width: '3rem',
                    height: '3rem',
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: !isFirstFloor ? '#E0D3FF' : 'white',
                  }}
                >
                  When I'm not coding, I enjoy appreciating different forms of
                  art. Whether that is admiring drawn artworks, exploring
                  architectural designs, or even listening to music. These
                  hobbies enhances my eye for aesthetics and allows me to
                  explore new design techniques and trends, which directly
                  translates into my front-end development work.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        {/* house plan */}
        <Box
          id="plan"
          sx={{
            gridRow: '1/9',
            gridColumn: '1/4',
            bgcolor: '#8C6ED9',
            boxSizing: 'border-box',
            padding: '2rem',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 1fr)',
              gridTemplateRows: 'repeat(10, 1fr)',
              width: '100%',
              height: '100%',
              border: 'solid white 2px',
              boxSizing: 'border-box',
              paddingX: '1rem',
            }}
          >
            <Box
              id="all-floors"
              sx={{
                gridRow: '1/9',
                gridColumn: '6/9',
                backgroundImage: `url(${Exploded})`,
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
                backgroundSize: 'contain',

                backgroundRepeat: 'no-repeat',
              }}
            />
            <Box
              id="living-room"
              sx={{
                gridRow: '1/9',
                gridColumn: '1/6',
                backgroundImage: isFirstFloor
                  ? `url(${LivingRoom})`
                  : `url(${Bedroom})`,
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                transition: '0.4s linear',
              }}
            />
            <Box
              sx={{
                gridRow: '9',
                gridColumn: '1/5',
                border: 'solid white 2px',
                borderLeft: 'none',
                boxSizing: 'border-box',
                ml: '-1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                CHRISTINE PHUNG
              </Typography>
            </Box>
            <Box
              sx={{
                gridRow: '9',
                gridColumn: '5/9',

                borderTop: 'solid white 2px',
                borderBottom: 'dashed white 2px',
                mr: '-1rem',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                CONTACTS
              </Typography>
            </Box>
            <Box
              id="contacts"
              sx={{
                color: 'white',
                width: '100%',
                height: '100%',
                gridRow: '10',
                gridColumn: '5/9',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                mr: '-1rem',
                flexWrap: 'wrap',
              }}
            >
              <Tooltip title="Github" placement="top">
                <IconButton
                  sx={{ height: '3.5rem', width: '3.5rem' }}
                  href="https://github.com/Christin322"
                  target="_blank"
                >
                  <Github />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn" placement="top">
                <IconButton
                  sx={{ height: '3.5rem', width: '3.5rem' }}
                  href="https://www.linkedin.com/in/christine-phung-060120b3/"
                  target="_blank"
                >
                  <LinkedinPlain color="white" size="100%" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Resume" placement="top">
                <IconButton
                  sx={{ height: '3.5rem', width: '3.5rem' }}
                  href="./resume.pdf"
                  target="_blank"
                >
                  <ArticleRoundedIcon
                    sx={{ color: 'white', width: '100%', height: '100%' }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email" placement="top">
                <IconButton
                  sx={{ height: '3.5rem', width: '3.5rem' }}
                  href="mailto:christine.phuong@hotmail.com"
                  target="_blank"
                >
                  <EmailRoundedIcon
                    sx={{ color: 'white', width: '100%', height: '100%' }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Box
              sx={{
                gridRow: '10',
                gridColumn: '1/5',

                borderRight: 'solid white 2px',
                ml: '-1rem',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {isFirstFloor
                  ? '1ST FLOOR: LIVING ROOM'
                  : 'GROUND FLOOR: BEDROOM'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
