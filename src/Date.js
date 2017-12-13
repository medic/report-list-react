import React from 'react';

class Date extends React.Component {

  constructor(props) {
    super(props);
    this.date = props.date;
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <p>{this.date.getDate()}-{this.date.getMonth()+1}-{this.date.getFullYear()}</p>
    );
  }
}

export default Date;
