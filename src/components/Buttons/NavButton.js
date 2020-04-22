import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';

const CustomBtn = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(1.5),
    padding: theme.spacing(1, 2.5),
    borderRadius: theme.spacing(10),
  },
  label: {
    fontSize: '13pt',
    letterSpacing: 1.5,
    underline: 'none',
    fontWeight: 400,
  },
}))(Button);

const useStyles = makeStyles((theme) =>
  createStyles({
    activeLink: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
  })
);

const NavButton = ({ children, path }) => {
  const classes = useStyles();
  return (
    <CustomBtn component={Link} to={path} activeClassName={classes.activeLink}>
      {children}
    </CustomBtn>
  );
};

export default NavButton;

// Styled navbar buttons
// use path prop to set the link path
