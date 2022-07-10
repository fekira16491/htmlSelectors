import React from "react";

const Dash = () => {
  return (
    <div>
      <p>
        if p is first child of any element it will be blue using :firstChild
      </p>
      <p>
        if p is first line of any p it will be blue using :firstLine if p is
        first line of any p it will be blue using :firstLine if p is first line
        of any p it will be blue using :firstLine if p is first line of any p it
        will be blue using :firstLine
      </p>
      <p>
        <i>strong</i> person
      </p>
      <a href="default.asp" target="_blank">
        This is a link
      </a>
      <h1>h1 before smiley will add using ::before</h1>
      <h2>h2 after smiley will add using ::after</h2>
    </div>
  );
};

export default Dash;
