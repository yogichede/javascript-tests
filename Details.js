import React, {PropTypes} from 'react';
import DropDown from '../common/DropDown';
import YearMonthDateNavigation from '../common/DatePickertester';
import {RadioGroup,Radio} from 'react-radio-group';
const PageData = {
//   'border':'4px solid silver'
};
const leftDetails = {
    'width': '0',
    'height': '50%',
    'position': 'absolute',
    'border': '1px solid black'
}
const borderDetails = {
    'borderBottom':'3px solid black'
}
const Details = ({courses}) => {
    return (
        <span style={PageData}>
        <p style={borderDetails}>List</p>
        <span>
         <input type ='text'/>
         <YearMonthDateNavigation/>
         <DropDown/>
         <RadioGroup name="fruit">
              <Radio value="apple" />Apple
              <Radio value="orange" />Orange
              <Radio value="watermelon" />Watermelon
        </RadioGroup>
        </span>
        <span style={leftDetails}>
            Details List
        </span>
        </span>
    );
};


export default Details;