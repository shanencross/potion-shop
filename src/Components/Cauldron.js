import React from "react";
import PropTypes from "prop-types";

function Cauldron(props) {
  const { name, brand, price, pints, id, whenCauldronClicked } = props;
  return (
    <React.Fragment>
      <div onClick={() => whenCauldronClicked(id)}>
        <h3>{name} - <em>${price.toFixed(2)}</em></h3>
        <h4>Pints left: {pints}</h4>
        <p>
          Brewed for you by:
          <br/>
          <em>{brand}</em>
          <br/>
        </p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Cauldron.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenCauldronClicked: PropTypes.func
}

export default Cauldron;