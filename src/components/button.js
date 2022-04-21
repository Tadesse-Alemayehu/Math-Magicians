import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { value, className, clickCallback } = this.props;
    return (
      <button type="button" className={className} onClick={clickCallback} name={value}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clickCallback: PropTypes.func.isRequired,
};
