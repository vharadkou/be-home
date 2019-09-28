import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import anton from 'images/profile/anton.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { useStore } from 'stores';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: '#ECF1F7',
    },
  },
  firstBlock: {
    height: '50%',
    backgroundColor: '#512DA8'

  },
  secondBlock: {
    height: '50%',
    backgroundColor: '#FFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
  header: {
    position: 'relative',
    height: '400px',
  },
  avatar: {
    backgroundImage: `url(${anton})`,
    position: 'absolute',
    top: '25%',
    bottom: '20%',
    left: '25%',

    width: '178px',
    height: '171px',
    borderRadius: '50%'
  },
  nameProfile: {
    marginTop: '50px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#000000',
  },
  wantGid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '55px',
  },
  list: {
    backgroundColor: 'white',
  },
  logout:{
    color: '#F5536B'
  }

}));

export const Profile = observer(() => {
  const classes = useStyles();
  const { authStore } = useStore();

  const onClickLogout = async () => {
    await authStore.logout();
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.firstBlock}>

        </div>
        <div className={classes.secondBlock}>
          <span className={classes.nameProfile}>Антон Марозов</span>
          <div className={classes.wantGid} >
            <Switch color="primary" />
            <span>Хочу быть гидом</span>
          </div>
        </div>
        <div className={classes.avatar}>
        </div>
      </div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem className={classes.list} button onClick={onClickLogout}>
          <ListItemIcon>
            <MeetingRoomIcon color="secondary"/>
          </ListItemIcon>

          <ListItemText className={classes.logout} primary="Выйти из аккаунта" />
        </ListItem>
      </List>
    </React.Fragment>
  );
});
