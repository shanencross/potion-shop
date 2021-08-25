import React from "react";
import Menu from "./Menu";
import cauldrons from "../data/cauldrons";
import CauldronDetails from "./CauldronDetails";
import NewCauldronForm from "./NewCauldronForm";

class CauldronControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
}

export default CauldronControl;