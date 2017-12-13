import React from 'react';
import Date from './Date';

class Report extends React.Component {

  constructor(props) {
    super(props);
    this.report = props.report;
    this.select = props.select;
  }

  getClasses(r, selected) {
    const classes = [];
    if (selected) {
      classes.push('selected');
    }
    if (r.valid) {
      classes.push('valid');
    }
    return classes.join(' ');
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <li onClick={(e) => this.select(this.report)} className={
        this.getClasses(this.report, this.props.selected)
      }>
        <p>{this.report.subject}</p>
        <p>{this.report.form}</p>
        <Date date={this.report.reportedDate} />
      </li>
    );
  }
}

export default Report;
