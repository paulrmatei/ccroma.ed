import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const Container = withStyles({
  position: "relative",
  overflow: "hidden",
  width: "300px",
  height: "150px"
})(Box);

// const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(Container);

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
  const [index, setIndex] = useState(0);
  const slides = useStaticQuery(allFile);
  const slides2 = slides.edges[0].node[0].id;
  console.log(slides2, "scsscsc");

  return (
    <Carousel>
      {/* {allFile.map((item, index) => {
        return ( */}
      <Slide right>
        {/* <Img fluid={slides.childImageSharp.fluid} key={index} /> */}
        ce pula mea???
      </Slide>
      {/* );
      })} */}

      {/* <Slide up>
        <div>
          <h1>Slide1</h1>
          <p>description</p>
        </div>
      </Slide>
      <Slide up>
        <div>
          <h1>Slide2</h1>
          <p>description</p>
        </div>
      </Slide> */}
    </Carousel>
  );
};

export default Example;
