import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  root: {
    width: 260
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  menuTitle: {
    margin: '16px 0 0 16px',
    display: 'inline-block',
    fontSize: 20
  }
}));

function GenericMenu(props) {
  const classes = useStyles();
  const { menuItems } = props;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const navigate = url => {
    props.history.push(url);
  };

  const prepareMenu = () => {
    return menuItems.map((menuItem, mainMenuIndex) => {
      return (
        <div>
          <span className={classes.menuTitle}>{menuItem.label}</span>
          <List>
            {menuItem.submenu.map((subMenuItem, index) => {
              const iconUrl = `https://ik.imagekit.io/alfakidz/${subMenuItem.icon}?tr=w-20,h-20`;
              return (
                <ListItem
                  button
                  onClick={() => navigate(subMenuItem.route)}
                  key={`${subMenuItem.label}-${index}`}
                >
                  <ListItemIcon>
                    <img src={iconUrl} alt={iconUrl} />
                  </ListItemIcon>
                  <ListItemText primary={subMenuItem.label} />
                </ListItem>
              );
            })}
          </List>
          {mainMenuIndex !== menuItems.length - 1 && <Divider />}
        </div>
      );
    });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {prepareMenu()}
    </div>
  );

  return (
    <div className="menu-container">
      <IconButton onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}

GenericMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(GenericMenu);
