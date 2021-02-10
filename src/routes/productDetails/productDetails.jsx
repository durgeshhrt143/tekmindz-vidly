/** @format */

import React from "react";
const productDetails = (props) => {
  const handleProgramaticNavigation = () => {
    props.history.push("/product");
  };
  return (
    <React.Fragment>
      <h1>product details:{props.match.params.id}</h1>
      <button onClick={handleProgramaticNavigation}>save</button>
    </React.Fragment>
  );
};

export default productDetails;
