import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import HomeCarousel from "../components/HomeCarousel";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Box position="relative" overflow="hidden" height="500px">
          <HomeCarousel />
        </Box>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
      </Box>
    </Container>
  );
}
