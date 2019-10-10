import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { headerMenu } from '../../constants/index';
import GenericMenu from '../Menu/GenericMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'white',
    color: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  alignment: {
    top: 8,
    left: 3
  },
  container: {
    minHeight: 200,
    width: 260
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <GenericMenu menuItems={headerMenu} classes={classes} />
          <Typography variant="h5" className={classes.title}>
            AlfaKidz
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
