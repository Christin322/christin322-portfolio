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
import AirBrBImage from './assets/airbrb.png';
import SeamsImage from './assets/seams.jpg';

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
        width: '100%',
        height: '100%',
        opacity: inViewProject === id ? 1 : 0,
        transition: '0.5s linear',
        position: 'absolute',
      }}
    >
      {children}
    </Box>
  );
};

export const EduSpace = ({ id }: InfoProps) => {
  return (
    <ProjectInfo id={id}>
      <Box
        id="eduspace-info-grid"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '1/3',
            backgroundImage: `url(${EduSpaceImg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            bgcolor: '#74b3ff',
          }}
        />
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '3/6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            px: '2rem',
          }}
        >
          <Typography variant="body1" sx={{ color: 'white' }}>
            Eduspace is a learning management system, handling tasks such as
            course administration, documentation, and delivery of educational
            materials. It is based off UNSW's education and management system
            for courses.
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
      </Box>
    </ProjectInfo>
  );
};

export const Airbrb = ({ id }: InfoProps) => {
  return (
    <ProjectInfo id={id}>
      <Box
        id="airbrb-info-grid"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '1/3',
            backgroundImage: `url(${AirBrBImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            bgcolor: 'white',
          }}
        />
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '3/6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            px: '2rem',
          }}
        >
          <Typography variant="body1" sx={{ color: 'white' }}>
            AirBrB is a person to person renting service, closely modelled off
            the popular renting platform Airbnb. A frontend web project
            utilising RESTful API to provide seamless communication between the
            front-end and back-end components.
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
      </Box>
    </ProjectInfo>
  );
};

export const Dungeonmania = ({ id }: InfoProps) => {
  return (
    <ProjectInfo id={id}>
      <Box
        id="dungeonmania-info-grid"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '1/3',
            backgroundImage: `url(${DungeonManiaImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            bgcolor: '#1d1919',
          }}
        />
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '3/6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            px: '2rem',
          }}
        >
          <Typography variant="body1" sx={{ color: 'white' }}>
            Dungeonmania is a web application game where the player must
            complete various goals within a series of dungeons to complete the
            game! This is a backend focused project to practice implementation
            of software design principles and patterns to create well-maintained
            software solutions.
          </Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <LanguageBox colour={'#E0D3FF'}>
              <JavaPlain color="#B49EEB" size="70%" />
            </LanguageBox>
          </Box>
        </Box>
      </Box>
    </ProjectInfo>
  );
};

export const Slackr = ({ id }: InfoProps) => {
  return (
    <ProjectInfo id={id}>
      <Box
        id="slackr-info-grid"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '1/3',
            backgroundImage: `url(${SeamsImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            bgcolor: '#a298ef',
          }}
        />
        <Box
          sx={{
            gridRow: '1/3',
            gridColumn: '3/6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            px: '2rem',
          }}
        >
          <Typography variant="body1" sx={{ color: 'white' }}>
            Slackr is a communication tool for groups and teams to support the
            high intensity learning environment of a hypothetical hexamester. It
            is closely inspired by Microsoft Teams. This project aims to provide
            experience with testing, developing and maintaining a backend server
            in Python.
          </Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <LanguageBox colour={'#E0D3FF'}>
              <PythonPlain color="#B49EEB" size="70%" />
            </LanguageBox>
          </Box>
        </Box>
      </Box>
    </ProjectInfo>
  );
};
