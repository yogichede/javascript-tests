import React, {PropTypes} from 'react';

const radioGroup = {
    margin:'15px'
}
const RadioButton = () => {
    return (
        <span style={radioGroup}>
          <input type="radio" name="currency"/>currency
          <input type="radio" name ="currency"/>Shares
        </span>
            );
};


export default RadioButton;
