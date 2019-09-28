import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TopBar } from './TopBar';
import { NavigationMenu } from './NavigationMenu';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

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

export const Shell = memo(({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TopBar />
      <Container className={classes.content} fixed>
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
        {children}
        <div className={classes.toolbar} />
      </Container>
      <NavigationMenu />
    </Box>
  );
});

Shell.displayName = 'Shell';
