import React, { PureComponent } from 'react';
import './Calculator.css';
import Button from './button';
import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      result: null,
    };
  }

  componentDidMount() {
    this.setState(() => ({
      total: 0,
      next: 0,
      operation: '',
      result: 0,
    }));
  }

  componentDidUpdate() {
    console.log('new data is', this.state);
  }

  calculateNewData = (event) => {
    const newData = calculate(
      this.state,
      event.target.textContent,
    );
    this.setState(() => ({
      total: newData.total || 0,
      next: newData.next || 0,
      operation: newData.operation || '',
      result: newData.total || newData.next || 0,
    }));
  }

  updateNextNumber = (event) => {
    this.setState((state) => {
      const result = state.result === 0
        ? event.target.textContent : state.result + event.target.textContent;
      return {
        total: state.total,
        next: state.next + event.target.textContent,
        operation: state.operation,
        result,
      };
    });
  }

  updateOperator = (event) => {
    const newData = calculate(
      this.state,
      event.target.textContent,
    );
    this.setState(() => ({
      total: newData.total,
      next: 0,
      operation: event.target.textContent,
      result: newData.total + event.target.textContent,
    }));
  }

  render() {
    const { result } = this.state;
    return (
      <div id="Calculator">
        <div id="result">
          <input type="text" name="result" id="result" value={result} />
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
