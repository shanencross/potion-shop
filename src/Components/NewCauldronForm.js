import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewCauldronForm(props) {
  function handleNewCauldronFormSubmission(event) {
    event.preventDefault();

    const { name, brand, price, description, magicConcentration } = event.target;
    props.onNewCauldronCreation({
      name: name.value,
      brand: brand.value,
      price: parseFloat(price.value),
      description: description.value,
      magicConcentration: parseFloat(magicConcentration.value),
      pints: 124,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      {/* name, brand, price, description, magicConcentration, pints=124, id=v4()*/}
      <h1>Order new potion cauldron</h1>
      <p>Fill out the form with the potion details to order a new cauldron for the shop.</p>
      <form onSubmit={handleNewCauldronFormSubmission}>
        <input 
          type="text" 
          name="name" 
          placeholder="Potion Name"
          required/>
        <br/>
        <input 
          type="text" 
          name="brand" 
          placeholder="Brand of potion brewer"
          required/>
        <br/>
        <input 
          type="number"
          step="0.01"
          name="price" 
          placeholder="Price per pint"
          required/>
        <br/>
        <input 
          type="text" 
          name="description" 
          placeholder="Potion effect description"
          required/>
        <br/>
        <input 
          type="number" 
          step="0.001"
          max="1"
          name="magicConcentration" 
          placeholder="Magic concentration"
          required/>
        <br/>
        <button type="submit">Submit new cauldron</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

NewCauldronForm.propTypes = {
  onNewCauldronCreation: PropTypes.func
};

export default NewCauldronForm;