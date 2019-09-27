import { RouterStore } from 'mobx-react-router';
import { createContext, useContext } from 'react';

import { AuthStore } from './auth.store';
import { GuidesStore } from './guides.store';

const stores = Object.freeze({
  authStore: new AuthStore(),
  routerStore: new RouterStore(),
  guidesStore: new GuidesStore(),
});

const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext(StoreContext);
};
