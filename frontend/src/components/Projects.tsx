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
import { Airbrb, Dungeonmania, EduSpace, Seams } from './ProjectInfo';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import Grid from '@mui/material/Grid';

const projects = [
  { id: 'eduspace', name: 'EduSpace', info: EduSpace },
  { id: 'airbrb', name: 'Airbrb', info: Airbrb },
  { id: 'dungeonmania', name: 'Dungeonmania', info: Dungeonmania },
  { id: 'seams', name: 'Seams', info: Seams },
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
  const projectNames = ['EduSpace', 'Airbrb', 'Dungeonmania', 'Seams'];

  //   console.log(scrollYProgress);
  return (
    <Box
      id="projects-section"
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
        // position: 'sticky',
        // top: 0,
      }}
    >
      {/* container for the info and the titles */}
      <Box
        sx={{
          width: '90rem',
          display: 'flex',
          justifyContent: 'end',
          position: 'relative',
          gap: '3rem',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '70vh',
            position: 'sticky',
            top: '15vh',
            mb: '15vh',
          }}
        >
          <Box
            sx={{
              bgcolor: 'black',
              width: '50vw',
              height: '100%',
              borderRadius: '3rem',
              boxSizing: 'border-box',

              marginLeft: 'auto',
              // left: '20vh',
            }}
          ></Box>
          {/* default is 12 columns */}
          <Grid
            container
            sx={{
              position: 'absolute',
              top: '12%',
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  mixBlendMode: 'difference',
                  fontWeight: 'bold',
                  pb: '1rem',
                  // zIndex: '10',
                }}
              >
                PROJECTS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {projects.map((project) => (
                <project.info id={project.id} key={project.id} />
              ))}
            </Grid>
          </Grid>
          {/* <Box
            sx={{
              width: '100%',
              position: 'absolute',
              top: '20%',
              pr: '5rem',
              boxSizing: 'border-box',
              marginRight: '100px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                mixBlendMode: 'difference',
                fontWeight: 'bold',
                pb: '1rem',
                // zIndex: '10',
              }}
            >
              PROJECTS
            </Typography>
            <Box sx={{ position: 'relative' }}>
              {projects.map((project) => (
                <project.info id={project.id} key={project.id} />
              ))}
            </Box>
          </Box> */}
        </Box>
        {/* <Box sx={{}}>
          {[1, 2, 3, 4, 5].map((image) => (
            <ProjectInfo />
          ))}
        </Box> */}

        <List sx={{ mt: '50vh', width: '20vw' }}>
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
