import React from "react";
import PropTypes from "prop-types";

function Cauldron(props) {
  const { name, brand, price, id, whenCauldronClicked } = props;
  return (
    <React.Fragment>
      <div onClick={() => whenCauldronClicked(id)}>
        <h3>{name} - <em>${price}</em></h3>
        <p>
          Brewed for you by:
          <br/>
          <em>{brand}</em>
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