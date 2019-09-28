import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import NavigationMenu from "components/NavigationMenu";

const Guides = observer(({ children }) => {
  return (
    <div>
      {children}
      <NavigationMenu />
    </div>
  );
});

export default Guides;
