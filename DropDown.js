import React from 'react';
import Select from 'react-select';
require('react-select/dist/react-select.css');
require('./dropdown.css')
const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
    ];
class DropDown extends React.Component{
 constructor(props, context) {
    super(props, context);
    this.state = {
        val:''
    };
    this.logChange = this.logChange.bind(this);
}

 logChange(val) {
  console.log("Selected: " + val);
  this.setState({val:val});
}


  render() {
    return(
    <span className="dropdown-details">
      <Select
          name="form-field-name"
          value={this.state.val}
          options={options}
          onChange={this.logChange}
      />
   </span>
);
  }
}
export default DropDown;