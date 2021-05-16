import React from "react";


/* This imports Dashboard Component*/
import Dash from './Dash'

import Sawo from "sawo";
function Dashbord() {

/* We are creating a state, using the useState hook. */

let [payload, setPayload] = React.useState(false);

/*
This makes sure when the component is rendered, 
it is called only once.
*/
React.useEffect(() => {
  var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: "79e78642-df12-43e8-915d-81b31a44e0c4",
      onSuccess: (payload) => {
        // console.log(payload); 
        setPayload(payload)
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
 }, []); 


 return (<>
         <div
          id="sawo-container"
          style={{ height: "300px", marginTop: "25px",marginLeft: "400px",marginRight: "400px" }}
        ></div>
        {payload && (
        <>
          
        </>
        )}
</>
  );
}

export default Dashbord;
