import React from "react";
import Menu from "./Menu";
import cauldrons from "../data/cauldrons";
import CauldronDetails from "./CauldronDetails";

function CauldronControl(props) {
  return (
    <React.Fragment>
      {/* <Menu menu={cauldrons}/> */}
      <CauldronDetails cauldron={cauldrons[0]}/>
    </React.Fragment>
  );
}

export default CauldronControl;