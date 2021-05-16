import React from "react";

const Dash = (props) => {

  return (
    <>
       <h2>Private Dashboard</h2>
        Email: {props.payload.identifier}
    </>
  );
};

export default Dash;