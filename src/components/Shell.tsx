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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    overflow: 'auto',
  },
  toolbar: theme.mixins.toolbar,
}));

export const Shell = observer(({ children }) => {
  const { authStore, routerStore } = useStore();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {authStore.isLoggedIn ? (
        <>
          {routerStore.location.pathname !== '/profile' && <TopBar />}
          <Container className={classes.content} fixed>
            {routerStore.location.pathname !== '/profile' && (
              <div className={classes.toolbar} />
            )}
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
