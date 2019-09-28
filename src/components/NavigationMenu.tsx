import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  item: {
    color: 'black',
  },
});

export function NavigationMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState('guide');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.appBar} position="fixed">
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        style={{ zIndex: 5 }}
      >
        <BottomNavigationAction
          className={classes.item}
          label="Гиды"
          value="guide"
          icon={<SupervisorAccountIcon />}
        />
        <BottomNavigationAction
          className={classes.item}
          label="Закладки"
          value="bookmarks"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          className={classes.item}
          label="События"
          value="events"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          className={classes.item}
          label="Профиль"
          value="profile"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </AppBar>
  );
}
