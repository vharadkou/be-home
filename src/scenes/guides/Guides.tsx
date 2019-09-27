import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';

export const Guides = observer(() => {
  const { guidesStore } = useStore();

  useEffect(() => {
    guidesStore.loadGuides();
  }, [guidesStore]);

  return <div>Guides Page</div>;
});
