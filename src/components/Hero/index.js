import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { makeStyles, createStyles } from '@material-ui//core/styles';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const navbarHeight = 74.06;

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
      marginLeft: '10%',
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
      <Box className={classes.textContainer} color='textPrimary'>
        <Typography variant='h3' component='h1'>
          {heading}
        </Typography>
        <Typography variant='h6' component='p'>
          {subheading}
        </Typography>
      </Box>
    </BackgroundImage>
  );
};

export default Hero;
