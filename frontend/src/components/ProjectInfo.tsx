// this is made cause if u have a state
// that sends if its active or not, its
// kinda like prop drilling
import React, { useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useProjectStore } from './Store';
import ProjectLanguage from './ProjectLanguage';
import {
  FigmaPlain,
  JavaPlain,
  PythonPlain,
  ReactOriginal,
  TypescriptPlain,
} from 'devicons-react';
import { DiReact } from 'react-icons/di';
import { JavascriptPlain } from 'devicons-react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import EduSpaceImg from './assets/Register.png';
import DungeonManiaImage from './assets/begin.png';

type ProjectInfoProps = {
  children: React.ReactNode;
} & InfoProps;

type InfoProps = {
  id: string;
};

type LanguageBoxProps = {
  children: React.ReactNode;
  colour: string;
};

const LanguageBox = ({ children, colour }: LanguageBoxProps) => (
  <Box
    sx={{
      width: {
        xs: '3rem',
        lg: '4rem',
      },
      height: {
        xs: '3rem',
        lg: '4rem',
      },
      border: '#B49EEB solid 3px',
      borderRadius: '1rem',
      overflow: 'hidden',
      bgcolor: colour,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </Box>
);

const Paragraph = ({ text }: any) => (
  <Typography variant="body1" sx={{ color: 'white' }}>
    {text}
  </Typography>
);

const ProjectInfo = ({ children, id }: ProjectInfoProps) => {
  const inViewProject = useProjectStore((state) => state.inViewProject);
  return (
    <Box
      sx={{
        display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* <Box
        id="project-info"
        sx={{
          display: 'flex',
          opacity: inViewProject === id ? 1 : 0,
          transition: 'opacity',
          position: 'absolute',
          top: 0,
          gap: '2rem',
          height: '17rem',
          width: '50vw',
        }}
      >
        {children}
      </Box> */}
      <Grid
        container
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          opacity: inViewProject === id ? 1 : 0,
          transition: 'opacity',
          position: 'absolute',
          gap: '2rem',
          pr: '2rem',
          height: '100%',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', gap: '2rem', height: '15rem' }}
        >
          {children}
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            aria-label="open-project"
            sx={{ width: '15rem', height: '15rem' }}
          >
            <LaunchRoundedIcon
              sx={{
                width: '100%',
                height: '100%',
                color: '#B49EEB',
              }}
            />
          </IconButton>
        </Grid>
      </Grid>
      {/* <IconButton aria-label="delete" size="small">
        <LaunchRoundedIcon
          fontSize="inherit"
          sx={{
            color: '#B49EEB',
            opacity: inViewProject === id ? 1 : 0,
          }}
        />
      </IconButton> */}
    </Box>
  );
};

export const EduSpace = ({ id }: InfoProps) => {
  return (
    <ProjectInfo id={id}>
      <Box
        sx={{
          width: '40%',
          height: '100%',
          backgroundImage: `url(${EduSpaceImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'left',
          backgroundPositionY: 'center',
        }}
      ></Box>
      <Box
        sx={{
          flex: '1',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1" sx={{ color: 'white' }}>
          Eduspace is a learning management system, handling tasks such as
          course administration, documentation, and delivery of educational
          materials. It is based off UNSW's education and management system for
          courses.
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <LanguageBox colour={'#E0D3FF'}>
            <DiReact color="#B49EEB" size="100%" />
          </LanguageBox>
          <LanguageBox colour={'#B49EEB'}>
            <JavascriptPlain color="#E0D3FF" size="100%" />
          </LanguageBox>
          <LanguageBox colour={'#E0D3FF'}>
            <FigmaPlain color="#B49EEB" size="70%" />
          </LanguageBox>
        </Box>
      </Box>
    </ProjectInfo>
  );
};

export const Airbrb = ({ id }: InfoProps) => {
  return (
    <ProjectInfo id={id}>
      <Box sx={{ width: '25rem', height: '100%', bgcolor: 'red' }}></Box>
      <Box
        sx={{
          flex: '1',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1" sx={{ color: 'white' }}>
          AirBrB is a person to person renting service, closely modelled off the
          popular renting platform Airbnb. A frontend web project utilising
          RESTful API to provide seamless communication between the front-end
          and back-end components.
        </Typography>

        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <LanguageBox colour={'#E0D3FF'}>
            <DiReact color="#B49EEB" size="100%" />
          </LanguageBox>
          <LanguageBox colour={'#B49EEB'}>
            <TypescriptPlain color="#E0D3FF" size="100%" />
          </LanguageBox>
        </Box>
      </Box>
    </ProjectInfo>
  );
};

export const Dungeonmania = ({ id }: InfoProps) => {
  return (
    <ProjectInfo id={id}>
      <Box
        sx={{
          width: '40%',
          height: '100%',
          backgroundImage: `url(${DungeonManiaImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'left',
          backgroundPositionY: 'top',
        }}
      ></Box>
      <Box
        sx={{
          flex: '1',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1" sx={{ color: 'white' }}>
          Dungeonmania is a web application game where the player must complete
          various goals within a series of dungeons to complete the game! This
          is a backend focused project to practice implementation of software
          design principles and patterns to create well-maintained software
          solutions.
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <LanguageBox colour={'#E0D3FF'}>
            <JavaPlain color="#B49EEB" size="70%" />
          </LanguageBox>
        </Box>
      </Box>
    </ProjectInfo>
  );
};

export const Seams = ({ id }: InfoProps) => {
  return (
    <ProjectInfo id={id}>
      <Box sx={{ width: '25rem', height: '100%', bgcolor: 'red' }}></Box>
      <Box
        sx={{
          flex: '1',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1" sx={{ color: 'white' }}>
          Seams is a communication tool for groups and teams to support the high
          intensity learning environment of a hypothetical hexamester. It is
          closely inspired by Microsoft Teams. This project aims to provide
          experience with testing, developing and maintaining a backend server
          in Python.
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <LanguageBox colour={'#E0D3FF'}>
            <PythonPlain color="#B49EEB" size="70%" />
          </LanguageBox>
        </Box>
      </Box>
    </ProjectInfo>
  );
};
