import React from 'react';
import Button from '@material-ui/core/Button';
import { useStore } from 'stores';
import { observer } from 'mobx-react-lite';

export const Auth = observer(() => {
  const { authStore, routerStore } = useStore();

  const handleLogin = async () => {
    await authStore.login();

    if (authStore.isLoggedIn) {
      routerStore.push('/guides');
    }
  };

  return (
    <div>
      <Button onClick={handleLogin} variant="contained" color="primary">
        Войти
      </Button>
    </div>
  );
});
