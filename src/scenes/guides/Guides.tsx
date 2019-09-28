import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import MasterPage from "components/MasterPage";
import GuidCard from "components/GuidCard";

export const Guides = observer(() => {
  const { uiStore } = useStore();

  useEffect(() => {
    uiStore.loadGuides();
  }, [uiStore]);

  return (
    <MasterPage>
      {uiStore.guides.map(g => (
        <div style={{ margin: "0 16px 12px 16px" }}>
          <GuidCard {...g}></GuidCard>
        </div>
      ))}
    </MasterPage>
  );
});
