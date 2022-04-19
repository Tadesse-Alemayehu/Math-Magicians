import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { name, className } = this.props;
    return (
      <span className={className}>{name}</span>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
