import React from "react";
import PropTypes from "prop-types";
import Cauldron from "./Cauldron";

function Menu(props) {
  const { menu, onCauldronSelection} = props;
  return (
    <React.Fragment>
      {menu.map((cauldron) => <Cauldron 
                                        name={cauldron.name}
                                        brand={cauldron.brand}
                                        price={cauldron.price}
                                        id={cauldron.id}
                                        whenCauldronClicked={onCauldronSelection}
                                        key={cauldron.id}/>)};
      <button>Add New Cauldron</button>
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu: PropTypes.array,
  onCauldronSelection: PropTypes.func
};

export default Menu;