import React, { PureComponent } from 'react';
import './Calculator.css';
import Button from './button';

export default class Calculator extends PureComponent {
  /**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
  render() {
    return (
      <div id="Calculator">
        <div id="result">
          <input type="text" name="result" id="result" value="0" />
        </div>
        <div id="leftSide">
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="0" className="zero" />
          <Button name="." />
        </div>
        <div id="rightSide">
          <Button className="divide operator" />
          <Button className="multiply operator" />
          <Button className="minus operator" />
          <Button className="plus operator" />
          <Button className="equal operator" />
        </div>
      </div>
    );
  }
}
