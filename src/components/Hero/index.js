import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { makeStyles, createStyles } from '@material-ui//core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) =>
  createStyles({
    backgroundImg: {
      backgroundAttachment: 'fixed',
      minHeight: 'calc(100vh - 74.06px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textContainer: {
      color: theme.palette.common.white,
    },
  })
);

const Hero = ({ image, heading, subheading }) => {
  const classes = useStyles();

  return (
    <BackgroundImage
      Tag='section'
      fluid={image}
      className={classes.backgroundImg}
    >
      <Container maxWidth='lg' className={classes.textContainer}>
        <Typography variant='h3' component='h1'>
          {heading}
        </Typography>
        <Typography variant='h6' component='p'>
          {subheading}
        </Typography>
      </Container>
    </BackgroundImage>
  );
};

export default Hero;
