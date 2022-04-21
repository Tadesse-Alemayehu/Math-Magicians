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
    // console.log(this.state);
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
          <Button value="AC" buttonName="AC" clickCallback={this.calculateNewData} />
          <Button value="+/-" buttonName="+/-" clickCallback={this.calculateNewData} />
          <Button value="%" buttonName="%" clickCallback={this.calculateNewData} />
          <Button value="1" clickCallback={this.updateNextNumber} />
          <Button value="2" clickCallback={this.updateNextNumber} />
          <Button value="3" clickCallback={this.updateNextNumber} />
          <Button value="4" clickCallback={this.updateNextNumber} />
          <Button value="5" clickCallback={this.updateNextNumber} />
          <Button value="6" clickCallback={this.updateNextNumber} />
          <Button value="7" clickCallback={this.updateNextNumber} />
          <Button value="8" clickCallback={this.updateNextNumber} />
          <Button value="9" clickCallback={this.updateNextNumber} />
          <Button value="0" className="zero" clickCallback={this.updateNextNumber} />
          <Button value="." clickCallback={this.updateNextNumber} />
        </div>
        <div id="rightSide">
          <Button className="divide operator" buttonName="÷" clickCallback={this.calculateNewData} />
          <Button className="multiply operator" buttonName="x" clickCallback={this.calculateNewData} />
          <Button className="minus operator" buttonName="-" clickCallback={this.calculateNewData} />
          <Button className="plus operator" buttonName="+" clickCallback={this.calculateNewData} />
          <Button className="equal operator" buttonName="=" clickCallback={this.calculateNewData} />
        </div>
      </div>
    );
  }
}
