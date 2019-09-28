import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';
import GuidCard from 'components/GuidCard';
import Box from '@material-ui/core/Box';

export const Guides = observer(() => {
  const { uiStore } = useStore();

  useEffect(() => {
    uiStore.loadGuides();
  }, [uiStore]);

  return (
    <Box>
      {uiStore.guides.map(g => (
        <div key={g.id} style={{ margin: '0 16px 12px 16px' }}>
          <GuidCard {...g}></GuidCard>
        </div>
      ))}
    </Box>
  );
});
