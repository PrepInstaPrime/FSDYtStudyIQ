import React from "react";

function Hero(props) {
  if (props.login) {
    return (
      <div>
        {props.welcome&&<h1>Welcome to Hero page</h1>}
        <h1>Hey this is heading</h1>
        Hey this is hero section
        <h2>{props.intro}</h2>

      </div>
    );
  } else {
    return <>
       {/* ternary operator */}
       {props.age>=18?"Login Please to Continue":"You can't access the page because ur age is less than 18"}
    </>;
  }
}
export { Hero };
