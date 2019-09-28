import { RouterStore } from 'mobx-react-router';
import { createContext, useContext } from 'react';

import { AuthStore } from './auth.store';
import { UiStore } from './ui.store';

const routerStore = new RouterStore();

const stores = Object.freeze({
  authStore: new AuthStore(routerStore),
  uiStore: new UiStore(),
  routerStore,
});

const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext(StoreContext);
};
