import React, { Component } from "react";

const Header = props => {
  return (
    <div>
      <h3>Todo's</h3>
      <span>Total: {props.total}</span>
      <br />
      <span>Completed: {props.completed}</span>
    </div>
  );
};

export default Header;
