import React from 'react';
import { Route, Redirect, withRouter, RouteProps } from 'react-router-dom';

export interface Props extends RouteProps {
  component: any;
  isLoggedIn: boolean;
  public: boolean;
}

export default withRouter(({ component: Component, ...rest }: any) => {
  if ((rest as any).isLoggedIn || (rest as any).public) {
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props}></Component>;
        }}
      />
    );
  }
  return <Redirect to={{ pathname: '/' }} />;
});
