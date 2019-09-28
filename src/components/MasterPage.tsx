import { observer } from "mobx-react-lite";
import React from "react";
import NavigationMenu from "components/NavigationMenu";
import { useStore } from "stores";
import CircularProgress from "@material-ui/core/CircularProgress";

const headerSize = "60px";

const Guides = observer(({ children }) => {
  const { uiStore } = useStore();

  return (
    <div style={{ minHeight: "100%", position: "relative" }}>
      <div style={{ height: headerSize, width: "100%", paddingBottom: "12px" }}>
        Title
      </div>
      <div style={{ paddingBottom: headerSize }}>
        {uiStore.isMasterPageLoading ? <CircularProgress /> : children}
      </div>
      <div
        style={{
          bottom: 0,
          height: "56px",
          left: 0,
          position: "fixed",
          right: 0,
          zIndex: 5
        }}
      >
        <NavigationMenu />
      </div>
    </div>
  );
});

export default Guides;
