import React from 'react';

import 'react-day-picker/lib/style.css';

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0, 1, 0, 0);
const toMonth = new Date(currentYear + 10, 11, 31, 23, 59);


export default class YearNavigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      from: null,
      to: null,
      value: moment().format('L'), // The value of the input field
      month: new Date(), // The month to display in the calendar
      showDatePicker: false // Show/Hide date picker
    };
    this.showCurrentDate = this.showCurrentDate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);

  }

  showCurrentDate() {
    this.setState({
      showDatePicker: true
    });
    //  this.daypicker.showMonth(this.state.month);
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
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.setState({ showDatePicker: false });

  }

  render() {
    const { from, to } = this.state;
    const selectedDay = from ? moment(from).format('L') + '-' + moment(to).format('L') : new Date(); //moment(this.state.value, 'L', true).toDate();
    //const selectedDay = 'You chose from' + {moment(from).format('L') +{' '} +'to'+{' '}{moment(to).format('L')}

    return (
      <div>
        <p>
          <input
            type="text"
            value={selectedDay}
            placeholder="mm/dd/yyyy"
            onChange={this.handleInputChange}
            onFocus={this.showCurrentDate}
          />
        </p>
        <div>
          {
            this.state.showDatePicker ?
              <DayPicker className="YearNavigation"
                canChangeMonth={false}
                initialMonth={this.state.month}
                selectedDays={selectedDay}
                onDayClick={this.handleDayClick}
                numberOfMonths={1}
                maxDate={new Date()}
                selectedDays={[from, { from, to }]}
                fromMonth={fromMonth}
                toMonth={toMonth}
              />:<div />
          }
          
        </div>
      </div>
    );
  }
  }