import React from "react";
import PropTypes from "prop-types";

import "./Button.css";
const Button = ({ foundMore }) => {
  return (
    <>
      <button type="button" onClick={foundMore} className="moreButton">
        Загрузить ещё
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  foundMore: PropTypes.func.isRequired,
};
