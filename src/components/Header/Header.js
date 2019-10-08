// import React from 'react';
// import './Header.scss';

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="title">AlfaKidz</div>
//     </div>
//   );
// };

// export default Header;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            AlfaKidz
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
