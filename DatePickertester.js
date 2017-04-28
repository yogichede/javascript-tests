import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import YearMonthForm from './YearMonthDateNavigation';



const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0, 1, 0, 0);
const toMonth = new Date(currentYear + 10, 11, 31, 23, 59);
const overlayStyle = {
  position: 'relative',
  background: 'white',
  display:'inline-block',
  boxShadow: '0 2px 5px rgba(0, 0, 0, .15)',
  marginLeft: '180px',
};
const datePickerStyle ={
    marginLeft: '25%',
    marginBottom: '10%',
    display: 'inline'

};
const mainContainer = {
  margin: '10px'
}

export default class YearMonthDateNavigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      from: null,
      to: null,
      value: moment().format('L'), // The value of the input field
      month: new Date(), // The month to display in the calendar
      showDatePicker: false // Show/Hide date picker
    };
    let clickedInside = false;
    this.showCurrentDate = this.showCurrentDate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
    this.handleContainerMouseDown = this.handleContainerMouseDown.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  showCurrentDate() {
    this.setState({
      showDatePicker: true
    });
    //  this.daypicker.showMonth(this.state.month);
  }
handleInputBlur () {
    const showDatePicker = this.clickedInside;


    // Force input's focus if blur event was caused by clicking on the calendar
    if (showDatePicker) {
     this.refs.dateInput.focus();
      //this.input.focus();
    }
    
    this.setState({
      showDatePicker
    });
  }
  handleContainerMouseDown () {
    this.clickedInside = true;
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
     setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  }
  handleInputChange(e) {
    const { value } = e.target;

    // Change the current month only if the value entered by the user
    // is a valid date, according to the `L` format
    if (moment(value, 'L', true).isValid()) {
      this.setState(
        {
          month: moment(value, 'L').toDate(),
          value
        },
        this.showCurrentDate
      );
    } else {
      this.setState({ value }, this.showCurrentDate);
    }
  }

  handleDayClick(day) {
    debugger;
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    if(range.from && range.to){
        this.setState({ showDatePicker: false });
    }
    
    //console.log("clicked...");
  }

  handleYearMonthChange(month) {
    //console.log("clicked-2...");
    this.setState({ month});
  }

  render() {
    const { from, to } = this.state;
    const selectedDay = from ? moment(from).format('L') + '-' + moment(to).format('L') : ""; //moment(this.state.value, 'L', true).toDate();
    
    return (
      <span onMouseDown={this.handleContainerMouseDown} style={mainContainer}>
        <span>
          <input
            type="text"
            ref="dateInput"
            value={selectedDay}
            placeholder="mm/dd/yyyy"
            onChange={this.handleInputChange}
            onFocus={this.showCurrentDate}
            onBlur={this.handleInputBlur}
          />
        </span>
        <span >
         {this.state.showDatePicker &&
          <span style={{ position: 'relative',marginRight: '40%'}}>
            <div style={overlayStyle}>
        <DayPicker
          month={this.state.month}
          style={datePickerStyle}
          fromMonth={fromMonth}
          toMonth={toMonth}
          dateFormat="dd-mm-yyyy"
          onDayClick={this.handleDayClick}
          selectedDays={[from, { from, to }]}
          canChangeMonth={false}
          captionElement={
            <YearMonthForm onChange={this.handleYearMonthChange} />
          }
    />
    </div>
          </span>}
          
        </span>
      </span>
    );
  }
  
}