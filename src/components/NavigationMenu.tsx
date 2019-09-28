import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EventIcon from '@material-ui/icons/Event';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AppBar from '@material-ui/core/AppBar';
import { useStore } from 'stores';

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
  const { routerStore } = useStore();
  const classes = useStyles();
  const [value, setValue] = React.useState('guide');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const handleGuidesClick = () => {
    routerStore.push('/guides');
  };

  const handleEventsClick = () => {
    routerStore.push('/events');
  };
  
  const handleProfileClick = () => {
    routerStore.push('/profile');
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
          onClick={handleGuidesClick}
          className={classes.item}
          label="Гиды"
          value="guide"
          icon={<SupervisorAccountIcon />}
        />
        <BottomNavigationAction
          className={classes.item}
          label="Закладки"
          value="bookmarks"
          icon={<BookmarkIcon />}
        />
        <BottomNavigationAction
          onClick={handleEventsClick}
          className={classes.item}
          label="События"
          value="events"
          icon={<EventIcon />}
        />
        <BottomNavigationAction
          onClick={handleProfileClick}
          className={classes.item}
          label="Профиль"
          value="profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </AppBar>
  );
}
