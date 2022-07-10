import React from "react";

const Dash = () => {
  return (
    <>
      <p>tag selectors</p>
      <p id="para1">Id selectors</p>
      <p className="center">Class selectors</p>
      <p className="extraCenter">Class selectors</p>
      <h1>group selectors</h1>
      <div>
        <label>div label div &#62; - Div inside all Label </label>
        <label>div label div &#62; - Div inside all Label </label>
        <label>div label div &#62; - Div inside all Label </label>
      </div>
      <p>div label div + - Div inside all Label</p>
      <div></div>
      <p>div label div + - Div inside all Label</p>
    </>
  );
};
export default Dash;
