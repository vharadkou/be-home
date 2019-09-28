import React, { useEffect, useMemo } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router';
import { Auth } from 'scenes/auth';
import { Guides } from 'scenes/guides';
import ProtectedRoute from 'ProtectedRoute';
import { useStore } from 'stores';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import { observer } from 'mobx-react-lite';

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
    <Router history={history}>
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
        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
});

export default App;
