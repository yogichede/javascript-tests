import React from 'react';
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'
import './dateRangePicker.css'
import moment from 'moment';
 
// CSS Modules, react-datepicker-cssmodules.css 
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'; 
 
class DateRangePickerComponent extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate:moment(),
      selectedDate:moment(),
      showDatePicker: false
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.openDatePicker = this.openDatePicker.bind(this)
  }
  openDatePicker() {
      this.setState({showDatePicker: !this.state.showDatePicker});
  }

  handleSelect(value, states) {
    this.setState({value, states});
  }

  render() {
    return (
      <div>
        <div className="datePickerValuesHolder">
          <input type="text" className="startDateField"
            value={this.state.value ? this.state.value.start.format('LL') : ""}
            readOnly={true}
            placeholder="Start date"/>
          <input type="text" className="endDateField"
            value={this.state.value ? this.state.value.end.format('LL') : ""}
            readOnly={true}
            placeholder="End date" />
            <a href="javascript:void(0)" onClick={this.openDatePicker}><i className="glyphicon glyphicon-calendar datepicker-icon"></i></a>
            {this.state.showDatePicker && <a href="javascript:void(0)" title="close" className="ok-icon" onClick={this.openDatePicker}><i className="glyphicon glyphicon-ok"></i></a>}
        </div>
        {this.state.showDatePicker &&  
          <div className="datePickerHolder">
            <DateRangePicker {...this.props} onSelect={this.handleSelect} value={this.state.value} />
          </div>
        }  
      </div>
    );
  }
}
DateRangePickerComponent.propTypes = { value: React.PropTypes.object};

export default DateRangePickerComponent;