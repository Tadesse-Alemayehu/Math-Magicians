import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { value, className, clickCallback } = this.props;
    return (
      <button type="submit" className={className} onClick={clickCallback}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clickCallback: PropTypes.func.isRequired,
};
