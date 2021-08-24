import React from "react";

import Cauldron from "./Cauldron";

function Menu(props) {
  return (
    <React.Fragment>
      <Cauldron name="Red Potion" brand="The Twinrova Sisters" price={24.99} />
      <Cauldron name="Green Potion" brand="Hyrule Market Town" price={24.99} />
      <Cauldron name="Blue potion" brand="Kakariko Village" price={24.99} />
      <Cauldron name="Purple Potion" brand="The Scarlet Witch" price={24.99} />
      <Cauldron />
      <Cauldron />
    </React.Fragment>
  );
}

export default Menu;