import React from 'react';
import { PropTypes } from 'prop-types';

const Block = ({ color, changeText, text }) => (
  <div
    onClick={() => changeText(text)}
    style={{ backgroundColor: color }}
    className="block">
  </div>
);
Block.propTypes = {
  color: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default Block;
