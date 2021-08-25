import React from "react";
import Menu from "./Menu";
import cauldrons from "../data/cauldrons";
import CauldronDetails from "./CauldronDetails";
import NewCauldronForm from "./NewCauldronForm";

class CauldronControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cauldronList: cauldrons,
      newCauldronFormVisible: false,
      selectedCauldron: null
    }
  }

  render() {
    const { cauldronList, newCauldronFormVisible, selectedCauldron } = this.state;
    let currentlyVisibleState = null;
    if (newCauldronFormVisible) {
      currentlyVisibleState = <NewCauldronForm/>
    }
    else if (selectedCauldron != null) {
      currentlyVisibleState = <CauldronDetails cauldron={selectedCauldron}/>
    }
    else {
      currentlyVisibleState = <Menu menu={this.state.cauldronList}/>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default CauldronControl;