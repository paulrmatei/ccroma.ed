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
import BackgroundSlider from 'gatsby-image-background-slider';

const useStyles = makeStyles(theme => ({
  slider: {
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      height: '50vh'
    }
  }
}));

// Carousel div

// const Container = styled.div`
//   position: 'relative';
//   overflow: 'hidden';
//   width: '100%';
// `;

// const CarouselUI = ({ children }) => <Container>{children}</Container>;
// const Carousel = makeCarousel(CarouselUI);

// Query

// const allFile = graphql`
//   query {
//     allFile(filter: { relativeDirectory: { eq: "slides" } }) {
//       nodes {
//         id
//         childImageSharp {
//           fluid(quality: 100) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   }
// `;

const sliderContent = [
  { title: 'WELCOME TO CCROMA.ED', description: 'Best saloon in Bucharest' },
  { title: 'CCROMA.ED', description: 'Best  in Bucharest' },
  { title: 'WELCOME ', description: 'Bucharest' }
];

const Example = props => {
  // const data = useStaticQuery(allFile);
  // const images = data.allFile.nodes;
  const classes = useStyles();

  return (
    <>
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "slides" } }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 4000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={['1.jpg', '3.jpg', '4.jpg']}
        // pass down standard element props
        styles={{
          transform: 'rotate(-2deg) scale(.9)'
        }}
      >
        {/* Captions in sync with background images*/}
        <div>Woof</div>
        <div>Meow</div>
        <>
          {/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}
        </>
        <a href='https://en.wikipedia.org/wiki/Tasmanian_devil#Conservation_status'>
          I could use a hand
        </a>
        <div>I need to find better hobbies</div>
      </BackgroundSlider>
    </>
  );
};

export default Example;
