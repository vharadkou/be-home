import React, { useEffect, useMemo } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router';
import { Auth } from 'scenes/auth';
import { Guides } from 'scenes/guides';
import ProtectedRoute from 'ProtectedRoute';
import { useStore } from 'stores';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Shell } from 'components/Shell';
import { Events } from 'scenes/events';

const theme = createMuiTheme({
  palette: { primary: { main: '#673AB7' } },
});

const browserHistory = createBrowserHistory();

const App = observer(() => {
  const { authStore, routerStore } = useStore();

  useEffect(() => {
    authStore.readSession();
  }, [authStore]);

  const history = useMemo(
    () => syncHistoryWithStore(browserHistory, routerStore),
    [routerStore],
  );

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Shell>
          <Switch>
            <Route exact path="/" render={() => <Redirect to={'/auth'} />} />
            <Route exact path="/auth" component={Auth} />
            <ProtectedRoute
              isLoggedIn={authStore.isLoggedIn}
              path="/guides"
              component={Guides}
              exact
              public={false}
            />
            <ProtectedRoute
              isLoggedIn={authStore.isLoggedIn}
              path="/events"
              component={Events}
              exact
              public={false}
            />
            <Redirect to={'/'} />
          </Switch>
        </Shell>
      </Router>
    </ThemeProvider>
  );
});

export default App;
