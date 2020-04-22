import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import links from '../Constants/links';

const useStyles = makeStyles((theme) =>
  createStyles({
    listItem: {
      textTransform: 'uppercase',
    },
    fullList: {
      width: 'auto',
    },
    textCenter: {
      textAlign: 'center',
    },
  })
);

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = (side) => (
    <div
      className={classes.fullList}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List disablePadding>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path} underline='none'>
              <ListItem button divider>
                <ListItemText align='center' className={classes.listItem}>
                  {item.text}
                </ListItemText>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer('top', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='top'
        open={state.top}
        onClose={toggleDrawer('top', false)}
        classes={{ paper: classes.paper }}
      >
        {fullList('top')}
      </Drawer>
    </div>
  );
}
