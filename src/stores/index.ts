import { RouterStore } from 'mobx-react-router';
import { createContext, useContext } from 'react';

import { AuthStore } from './auth.store';
import { GuidesStore } from './guides.store';

const routerStore = new RouterStore();

const stores = Object.freeze({
  authStore: new AuthStore(routerStore),
  guidesStore: new GuidesStore(),
  routerStore,
});

const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext(StoreContext);
};
