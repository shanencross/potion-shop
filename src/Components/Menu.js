import React from "react";
import PropTypes from "prop-types";
import cauldrons from "../data/cauldrons";
import Cauldron from "./Cauldron";

const cauldronMenu = cauldrons;

function Menu(props) {
  const { menu } = props;
  return (
    <React.Fragment>
      {menu.map((cauldron) => <Cauldron 
                                        name={cauldron.name}
                                        brand={cauldron.brand}
                                        price={cauldron.price}
                                        id={cauldron.id}
                                        key={cauldron.id}/>)};
      <button>Add New Cauldron</button>
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu: PropTypes.array
};

export default Menu;