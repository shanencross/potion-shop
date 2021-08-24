import React from "react";
import { v4 } from "uuid";
import Cauldron from "./Cauldron";

const cauldronMenu = [
  {
    name: "Red Potion",
    brand: "The Twinrova Sisters",
    price: 24.99,
    magicConcentration: 0.1,
    pints: 124,
    id: v4(),
  },

  {
    name: "Green Potion",
    brand: "Hyrule Market Town",
    price: 20.99,
    magicConcentration: 1.0,
    pints: 124,
    id: v4(),
  },

  {
    name: "Blue Potion",
    brand: "Kakariko Village",
    magicConcentration: 0.8,
    pints: 124,
    price: 53.99,
    id: v4(),
  },

  {
    name: "Purple Potion",
    brand: "The Scarlet Witch",
    price: 102.99,
    magicConcentration: 0.95,
    pints: 124,
    id: v4(),
  }
]

function Menu(props) {
  return (
    <React.Fragment>
      {cauldronMenu.map((cauldron) => <Cauldron 
                                        name={cauldron.name}
                                        brand={cauldron.brand}
                                        price={cauldron.price}
                                        id={cauldron.id}/>)};
      <button>Add New Cauldron</button>
    </React.Fragment>
  );
}

export default Menu;