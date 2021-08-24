import React from "react";

function Cauldron(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - <em>${props.price}</em></h3>
      <p>
        Brewed for you by:
        <br/>
        <em>{props.brand}</em>
      </p>
      <hr/>
    </React.Fragment>
  );
}

export default Cauldron;