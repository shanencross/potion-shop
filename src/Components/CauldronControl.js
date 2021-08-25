import React from "react";
import Menu from "./Menu";
import cauldrons from "../data/cauldrons";
import CauldronDetails from "./CauldronDetails";
import NewCauldronForm from "./NewCauldronForm";

function CauldronControl(props) {
  return (
    <React.Fragment>
      <Menu menu={cauldrons}/>
      <hr/>
      <CauldronDetails cauldron={cauldrons[3]}/>
      <hr/>
      <NewCauldronForm/>
    </React.Fragment>
  );
}

export default CauldronControl;