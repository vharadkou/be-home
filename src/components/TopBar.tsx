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
    },
    circle: {
      width: 24,
      height: 24,
    },
    controls: {
      width: 24,
      height: 24,
      borderRadius: 0,
    },
  }),
);

export const TopBar = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Выбор гида
        </Typography>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
      </Toolbar>
      <Toolbar variant="dense">
        <Avatar className={classes.circle} alt="Near Me" src={NearMe} />
        <Typography variant="body2" className={classes.title}>
          Могилев, Беларусь
        </Typography>
        <IconButton
          aria-label="show 4 new mails"
          color="inherit"
          onClick={uiStore.openFilter}
        >
          <Avatar className={classes.controls} alt="Controls" src={Controls} />
        </IconButton>
        <Filter />
      </Toolbar>
    </AppBar>
  );
};
