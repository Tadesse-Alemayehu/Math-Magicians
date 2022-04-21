import React, { useState, useEffect } from 'react';
import './Calculator.css';
import Button from './button';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [total, setTotal] = useState(null)
  const [next, setNext] = useState(null)
  const [operation, setOperation] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    setTotal(0);
    setNext(0);
    setOperation('');
    setResult(0);
  }, []);

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
      const nextNumber = state.next === 0
        ? event.target.textContent : state.next + event.target.textContent;
      return {
        total: state.total,
        next: nextNumber,
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
          <Button value="7" clickCallback={this.updateNextNumber} />
          <Button value="8" clickCallback={this.updateNextNumber} />
          <Button value="9" clickCallback={this.updateNextNumber} />
          <Button value="4" clickCallback={this.updateNextNumber} />
          <Button value="5" clickCallback={this.updateNextNumber} />
          <Button value="6" clickCallback={this.updateNextNumber} />
          <Button value="1" clickCallback={this.updateNextNumber} />
          <Button value="2" clickCallback={this.updateNextNumber} />
          <Button value="3" clickCallback={this.updateNextNumber} />
          <Button value="0" className="zero" clickCallback={this.updateNextNumber} />
          <Button value="." clickCallback={this.updateNextNumber} />
        </div>
        <div id="rightSide">
          <Button className="divide operator" value="÷" clickCallback={this.updateOperator} />
          <Button className="multiply operator" value="x" clickCallback={this.updateOperator} />
          <Button className="minus operator" value="-" clickCallback={this.updateOperator} />
          <Button className="plus operator" value="+" clickCallback={this.updateOperator} />
          <Button className="equal operator" value="=" clickCallback={this.calculateNewData} />



          cpdcpccpcfccfcccsfcfccsfccf