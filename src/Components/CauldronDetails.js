import React from "react";
import PropTypes from "prop-types";

function CauldronDetails(props) {
  const { cauldron, onClickingBuy } = props;
  const { name, brand, price, description, magicConcentration, pints, id } = cauldron;
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <button onClick={() => onClickingBuy(id)}><strong>Buy pint</strong> for ${price.toFixed(2)}</button>
      <p>
        <strong>Brewed for you by:</strong> <em>{brand}</em>
        <br/>
        <strong>Effect: </strong>{description}
        <br/>
        <strong>Magic concentration:</strong> {magicConcentration}
        <br/>
        <strong>Pints left:</strong> {pints}
      </p>
      <hr/>
    </React.Fragment>
  );
}

CauldronDetails.propTypes = {
  cauldron: PropTypes.object,
  onClickingBuy: PropTypes.func
};

export default CauldronDetails;