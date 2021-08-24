import React from "react";
import PropTypes from "prop-types";

function Cauldron(props) {
  const { name, brand, price } = props;
  return (
    <React.Fragment>
      <h3>{name} - <em>${price}</em></h3>
      <p>
        Brewed for you by:
        <br/>
        <em>{brand}</em>
      </p>
      <hr/>
    </React.Fragment>
  );
}

Cauldron.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string
}


export default Cauldron;