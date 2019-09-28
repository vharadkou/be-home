import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('guide');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Гиды" value="guide" icon={<SupervisorAccountIcon />} />
      <BottomNavigationAction label="Закладки" value="bookmarks" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="События" value="events" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Профиль" value="profile" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}