import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import MasterPage from "components/MasterPage";

export const Guides = observer(() => {
  const { guidesStore } = useStore();

  useEffect(() => {
    guidesStore.loadGuides();
  }, [guidesStore]);

  return <MasterPage>Guids page</MasterPage>;
});
