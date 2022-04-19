import React, { PureComponent } from 'react';
import './Calculator.css';
import Button from './button';
import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: '10',
      next: '10',
      operation: 'x',
    };
  }

  /**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
  calculateNewData = () => {
    console.log('button clicked');
    console.log(this.state);
    // call the calculator method with this.state and button
  }

  updateNextNumber = () => {
    console.log('number clicked');
    // update the number to the state.next
  }

  render() {
    console.log(calculate(
      this.state,
      '=',
    ));
    this.calculateNewData();
    const { total } = this.state;
    return (
      <div id="Calculator">
        <div id="result">
          <input type="text" name="result" id="result" value={total} />
        </div>
        <div id="leftSide">
          <Button name="AC" buttonName="AC" />
          <Button name="+/-" buttonName="+/-" />
          <Button name="%" buttonName="%" />
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
          <Button className="divide operator" buttonName="÷" />
          <Button className="multiply operator" buttonName="x" />
          <Button className="minus operator" buttonName="-" />
          <Button className="plus operator" buttonName="+" />
          <Button className="equal operator" buttonName="=" />
        </div>
      </div>
    );
  }
}
