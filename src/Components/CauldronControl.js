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

  handleChangingSelectedCauldron = (id) => {
    const newSelectedCauldron = this.state.cauldronList.filter(cauldron => cauldron.id === id)[0];
    this.setState({
      newCauldronFormVisible: false,
      selectedCauldron: newSelectedCauldron 
    });
  }

  handleReturnToMenu = () => {
    this.setState({
      newCauldronFormVisible: false,
      selectedCauldron: null
    });
  }

  handleAddClick = () => {
    this.setState({
      newCauldronFormVisible: true
    });
  }

  handleAddingNewCauldron = (newCauldron) => {
    const newCauldronList = [ ...this.state.cauldronList, newCauldron ];
    console.log(newCauldronList);
    this.setState({
      newCauldronFormVisible: false,
      cauldronList: newCauldronList
    });
  }

  render() {
    const { cauldronList, newCauldronFormVisible, selectedCauldron } = this.state;
    
    const returnToMenuButton = (newCauldronFormVisible || selectedCauldron != null) ?
      <button onClick={this.handleReturnToMenu}>Return to Potion Menu</button> :
      null;

    let currentlyVisibleState = null;
    if (newCauldronFormVisible) {
      currentlyVisibleState = <NewCauldronForm onNewCauldronCreation={this.handleAddingNewCauldron}/>
    }
    else if (selectedCauldron != null) {
      currentlyVisibleState = <CauldronDetails cauldron={selectedCauldron}/>
    }
    else {
      currentlyVisibleState = <Menu 
                                menu={cauldronList} 
                                onCauldronSelection={this.handleChangingSelectedCauldron}
                                onClickingAdd={this.handleAddClick}/>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {returnToMenuButton}
      </React.Fragment>
    );
  }
}

export default CauldronControl;