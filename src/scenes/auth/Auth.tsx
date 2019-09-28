import React from 'react';
import Button from '@material-ui/core/Button';
import { useStore } from 'stores';
import { observer } from 'mobx-react-lite';
import { Filter } from 'components/Filter';

export const Auth = observer(() => {
  const { authStore, routerStore, uiStore } = useStore();

  const handleLogin = async () => {
    await authStore.login();

    if (authStore.isLoggedIn) {
      routerStore.push('/guides');
    }
  };

  const handleFilterOpen = () => {
    uiStore.openFilter();
  };

  return (
    <div>
      <Button onClick={handleLogin} variant="contained" color="primary">
        Войти
      </Button>
      <Button onClick={handleFilterOpen} variant="contained" color="primary">
        Фильтр
      </Button>
      <Filter />
    </div>
  );
});
