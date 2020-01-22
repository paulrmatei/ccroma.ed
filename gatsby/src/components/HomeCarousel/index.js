import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

const Container = styled.div`
  position: "relative";
  overflow: "hidden";
  width: "300px";
  height: "150px";
`;

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

const { allFile } = graphql`
  query {
    allFile(
      sort: { fields: name, order: DESC }
      filter: { relativeDirectory: { eq: "slides" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Example = props => {
  // const [index, setIndex] = useState(0);
  // const slides = useStaticQuery(allFile);
  // const slides2 = slides.edges[0].node[0].id;

  return (
    <>
      <Carousel>
        <Slide right>
          <Box height="100vh">Ccccc</Box>
        </Slide>
        <Slide right>
          <Box bgcolor="primary.main" height="100vh">
            Slide 2
          </Box>
        </Slide>
      </Carousel>
    </>
  );
};

export default Example;
