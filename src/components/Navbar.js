import React from 'react';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Drawer from './NavDrawer';
import NavButton from './Buttons/NavButton';
import links from '../Constants/links';
import logo from '../img/logo-nav-scale.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontFamily: 'sans-serif',
      display: 'flex',
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: '14pt',
      fontWeight: '600',
      letterSpacing: 2,
    },
    navbar: {
      backgroundColor: '#fdfdff',
      color: 'inherit',
      padding: '0.2rem 0',
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position='sticky' className={classes.navbar}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box className={classes.title}>
            <Link to='/' className={classes.brand} underline='none'>
              <img src={logo} alt='logo' style={{ width: '80px' }} />
              <Typography className={classes.brand}>CCROMA.ED</Typography>
            </Link>
          </Box>
          <Hidden xsDown>
            {links.map((item, index) => {
              return (
                <NavButton path={item.path} key={index}>
                  {item.text}
                </NavButton>
              );
            })}
          </Hidden>
          <Hidden smUp>
            <Drawer />
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
