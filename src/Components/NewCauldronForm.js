import React from "react";

function NewCauldronForm(props) {
  return (
    <React.Fragment>
      {/* name, brand, price, description, magicConcentration, pints=124, id=v4()*/}
      <h1>Order new potion cauldron</h1>
      <p>Fill out the form with the potion details to order a new cauldron for the shop.</p>
      <form>
        <input 
          type="text" 
          name="name" 
          placeholder="Potion Name"/>
        <br/>
        <input 
          type="text" 
          name="brand" 
          placeholder="Brand of potion brewer"/>
        <br/>
        <input 
          type="number" 
          name="price" 
          placeholder="Price per pint"/>
        <br/>
        <input 
          type="text" 
          name="description" 
          placeholder="Potion effect description"/>
        <br/>
        <input 
          type="number" 
          step="0.01"
          max="1"
          name="magicConcentration" 
          placeholder="Magic concentration"/>
        <br/>
        <button type="submit">Submit new cauldron</button>
      </form>
    </React.Fragment>
  );
}

export default NewCauldronForm;