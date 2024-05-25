import logo from './logo.svg';
// import './App.css';
// import Pages from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import ProjectTitle from './ProjectTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React, { useRef } from 'react';
import { Airbrb, Dungeonmania, EduSpace, Slackr } from './ProjectInfo';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import Grid from '@mui/material/Grid';
import OpenIcon from './assets/OpenIcon';
import { Fade } from 'react-awesome-reveal';

const projects = [
  { id: 'eduspace', name: 'EduSpace', info: EduSpace },
  { id: 'airbrb', name: 'Airbrb', info: Airbrb },
  { id: 'dungeonmania', name: 'Dungeonmania', info: Dungeonmania },
  { id: 'slackr', name: 'Slackr', info: Slackr },
];
const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Heading = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return <Typography>Projects</Typography>;
};

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 2', '1.33 1'],
  });

  //   console.log(scrollYProgress);
  return (
    <Box
      id="PROJECTS"
      sx={{
        display: 'flex',
        // flexDirection: 'column',
        bgcolor: '#F4F1EC',
        width: '100vw',
        height: '150vh',
        justifyContent: 'center',
        // alignItems: 'top',
        // alignItems: 'center',
        boxSizing: 'border-box',
        paddingX: '10rem',
        // position: 'sticky',
        // top: 0,
      }}
    >
      {/* have two grids 
      one for the back box and the titles then the other for the project info */}
      {/* container for the info and the titles */}

      <Box
        sx={{
          height: '70vh',
          width: '100%',
          bgcolor: '#F4F1EC',
          display: 'grid',
          boxSizing: 'border-box',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(5, 1fr)',
          position: 'sticky',
          top: '15vh',
          mb: '15vh',
        }}
      >
        <Box
          sx={{
            bgcolor: 'black',
            gridRow: '1/6',
            gridColumn: '2/6',
            borderRadius: '4rem',
          }}
        ></Box>

        <Box sx={{ gridRow: '2', gridColumn: '1/6' }}>
          <Typography
            variant="h1"
            sx={{
              color: '#F4F1EC',
              mixBlendMode: 'exclusion',
              fontWeight: 'bold',
              // zIndex: '10',
            }}
          >
            PROJECTS
          </Typography>
        </Box>
        <Box sx={{ gridRow: '3/5', gridColumn: '1/6' }}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            {projects.map((project) => (
              <project.info id={project.id} key={project.id} />
            ))}
          </Box>
        </Box>
        <Box sx={{ gridRow: '5', gridColumn: '5' }}>
          <IconButton
            disabled
            aria-label="open-project"
            sx={{ width: '100%', height: '100%', opacity: 0.5 }}
          >
            <LaunchRoundedIcon
              sx={{
                width: '70%',
                height: '100%',
                color: '#B49EEB',

                // background:
                //   'linear-gradient(90deg, rgba(118,136,199,1) 0%, rgba(128,102,195,1) 100%);',
              }}
            />
            {/* <OpenIcon /> */}
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          height: '100vh',
          width: '20rem',
          boxSizing: 'border-box',
        }}
      >
        <List sx={{ mt: '50vh', width: '10vw', pl: '4rem' }}>
          {projects.map((project) => (
            <ListItem
              sx={{ listStyleType: 'none', mb: '3rem' }}
              key={project.id}
            >
              <ProjectTitle id={project.id}>{project.name}</ProjectTitle>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* columns */}
      {/* <Box sx={{ bgcolor: 'blue', width: '100%', height: '100%' }}>
        <Box
          sx={{
            width: '10rem',
            height: '10rem',
            bgcolor: 'black',
            position: 'sticky',
            top: 0,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          bgcolor: 'white',
          width: '100%',
        }}
      >
        <List>
          {projectNames.map((name) => (
            <ListItem sx={{ listStyleType: 'none' }} key={name}>
              <ProjectTitle>{name}</ProjectTitle>
            </ListItem>
          ))}
        </List>
      </Box> */}

      {/* <ProjectInfo /> */}
    </Box>
  );
};

export default Projects;
