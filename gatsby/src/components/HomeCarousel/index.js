import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  slider: {
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      height: '50vh'
    }
  },
  slider2: {
    overflow: 'hidden'
  }
}));

// Carousel div

const Container = styled.div`
  position: 'relative';
  overflow: 'hidden';
  width: '100%';
`;

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

// Query

const allFile = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "slides" } }) {
      nodes {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

const sliderContent = [
  { title: 'WELCOME TO CCROMA.ED', description: 'Best saloon in Bucharest' },
  { title: 'CCROMA.ED', description: 'Best  in Bucharest' },
  { title: 'WELCOME ', description: 'Bucharest' },
  { title: 'WELCOME 222222', description: 'Bucharest' }
];

const MySlider = ({ classes, images }) => {
  return (
    <>
      {images.map((item, index) => {
        return (
          <BackgroundImage
            Tag='div'
            fluid={item.childImageSharp.fluid}
            className={classes.slider}
            key={index}
          ></BackgroundImage>
        );
      })}
    </>
  );
};

const Example = props => {
  const data = useStaticQuery(allFile);
  const images = data.allFile.nodes;
  const classes = useStyles();
  console.log(sliderContent);

  return (
    <Carousel>
      {images.map((item, index) => {
        return (
          <Slide right key={item.id} className={classes.slider2}>
            <BackgroundImage
              Tag='div'
              fluid={item.childImageSharp.fluid}
              className={classes.slider}
            >
              <h1>{sliderContent[index].title}</h1>
              <p>{sliderContent[index].description}</p>
            </BackgroundImage>
          </Slide>
        );
      })}
    </Carousel>
  );
};

export default Example;
