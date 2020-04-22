import React from 'react';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Drawer from './NavDrawer';
import NavButton from './Buttons/NavButton';
import links from '../Constants/links';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontSize: '13pt',
      fontWeight: 600,
      fontFamily: 'sans-serif',
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position='sticky' color='default'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography className={classes.title}>CCROMA.ED</Typography>
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
