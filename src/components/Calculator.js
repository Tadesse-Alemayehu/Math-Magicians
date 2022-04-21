import React, { PureComponent } from 'react';
import './Calculator.css';
import Button from './button';
import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  buttonName = null;

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: '',
    };
  }

  componentDidMount() {
    console.log('component is mounted');
    this.buttonName = 'AC';
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
  calculateNewData = (event) => {
    console.log(event.target.textContent);
    const newData = calculate(
      this.state,
      event.target.textContent,
    );
    console.log(newData);
    // console.log(this.state);
    // this.setState(newData);
    // console.log(this.state);
    // call the calculator method with this.state and button
  }

  updateNextNumber = (event) => {
    this.setState((state) => ({
      total: state.total,
      next: state.next + event.target.textContent,
      operation: state.operation,
    }));

    console.log('new state is', this.state);
  }

  updateOperator = (event) => {
    // console.log(event.target);
    this.setState((state) => ({
      total: state.total,
      next: state.next,
      operation: event.target.textContent,
    }));
    console.log('new state is', this.state);
  }

  render() {
    const { total } = this.state;
    return (
      <div id="Calculator">
        <div id="result">
          <input type="text" name="result" id="result" value={total} />
        </div>
        <div id="leftSide">
          <Button value="AC" buttonName="AC" clickCallback={this.calculateNewData} />
          <Button value="+/-" buttonName="+/-" clickCallback={this.calculateNewData} />
          <Button value="%" buttonName="%" clickCallback={this.updateOperator} />
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
          <Button className="divide operator" value="÷" clickCallback={this.updateOperator} />
          <Button className="multiply operator" value="x" clickCallback={this.updateOperator} />
          <Button className="minus operator" value="-" clickCallback={this.updateOperator} />
          <Button className="plus operator" value="+" clickCallback={this.updateOperator} />
          <Button className="equal operator" value="=" clickCallback={this.calculateNewData} />
        </div>
      </div>
    );
  }
}
