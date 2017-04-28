import React from 'react';
import { DateField,DatePicker } from 'react-date-picker';
import 'react-date-picker/index.css';
class Datepicker extends React.Component{

  render() {
      return(
    <DateField
        dateFormat= {this.props.dateFormat}
        forceValidDate={this.props.validDate?this.props.validDate:true}
        updateOnDateClick={this.props.updateDate?this.props.updateDate:true}
        collapseOnDateClick={true}
        defaultValue={this.props.currentDate}
        mindate={this.props.max}
    >
  <DatePicker
      navigation={true}
      locale="en"
      forceValidDate={true}
      highlightWeekends={true}
      highlightToday={true}
      weekNumbers={true}
      weekStartDay={0}
  />
</DateField>
)
  }
}
export default Datepicker;
