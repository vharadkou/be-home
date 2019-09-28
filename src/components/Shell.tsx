import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TopBar } from './TopBar';
import { NavigationMenu } from './NavigationMenu';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#EEEEEE',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    overflow: 'auto',
  },
  toolbar: theme.mixins.toolbar,
}));

export const Shell = observer(({ children }) => {
  const { authStore } = useStore();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {authStore.isLoggedIn ? (
        <>
          <TopBar />
          <Container className={classes.content} fixed>
            <div className={classes.toolbar} />
            {children}
            <div className={classes.toolbar} />
          </Container>
          <NavigationMenu />
        </>
      ) : (
        children
      )}
    </Box>
  );
});

Shell.displayName = 'Shell';
