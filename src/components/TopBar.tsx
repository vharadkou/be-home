import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import NearMe from 'images/svg/near-me.svg';
import Avatar from '@material-ui/core/Avatar';
import Controls from 'images/svg/controls.svg';
import { Filter } from 'components/Filter';
import { useStore } from 'stores';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    circle: {
      width: 24,
      height: 24,
    },
    controls: {
      width: 20,
      height: 20,
      borderRadius: 0,
    },
  }),
);

export const TopBar = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  return (
    <AppBar position="fixed">
      <Toolbar variant="regular">
        <Typography variant="body2" className={classes.title}>
          <Avatar className={classes.circle} alt="Near Me" src={NearMe} />
          Могилев, Беларусь
        </Typography>
        <IconButton
          aria-label="show 4 new mails"
          color="inherit"
          onClick={uiStore.openFilter}
        >
          <Avatar className={classes.controls} alt="Controls" src={Controls} />
        </IconButton>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <Filter />
      </Toolbar>
    </AppBar>
  );
};
