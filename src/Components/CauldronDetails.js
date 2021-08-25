import React from "react";
import PropTypes from "prop-types";

function CauldronDetails(props) {
  const { cauldron } = props;
  const { name, brand, price, description, magicConcentration, pints } = cauldron;
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <button><strong>Buy pint</strong> for ${price.toFixed(2)}</button>
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
  cauldron: PropTypes.object
};

export default CauldronDetails;