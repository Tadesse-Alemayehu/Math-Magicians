import React, { useState, useEffect } from 'react';
import './Calculator.css';
import Button from './button';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setTotal(0);
    setNext(0);
    setOperation('');
    setResult(0);
  }, []);

  useEffect(() => {
    console.log('new data is', [total, next, operation, result]);
  });

  const calculateNewData = (event) => {
    const newData = calculate(
      {
        total,
        next,
        operation,
      },
      event.target.textContent,
    );
    setTotal(newData.total || 0);
    setNext(newData.next || 0);
    setOperation(newData.operation || '');
    setResult(newData.total || newData.next || 0);
  };

  const updateNextNumber = (event) => {
    const newResult = result === 0
      ? event.target.textContent : result + event.target.textContent;
    const nextNumber = next === 0
      ? event.target.textContent : next + event.target.textContent;
    setNext(nextNumber);
    setResult(newResult);
  };

  const updateOperator = (event) => {
    const newData = calculate(
      {
        total,
        next,
        operation,
      },
      event.target.textContent,
    );
    setTotal(newData.total || 0);
    setNext(0);
    setOperation(event.target.textContent);
    setResult((newData.total || '0') + event.target.textContent);
  };

  return (
    <div id="Calculator">
      <div id="result">
        <input type="text" name="result" id="result" value={result} />
      </div>
      <div id="leftSide">
        <Button value="AC" buttonName="AC" clickCallback={calculateNewData} />
        <Button value="+/-" buttonName="+/-" clickCallback={calculateNewData} />
        <Button value="%" buttonName="%" clickCallback={updateOperator} />
        <Button value="7" clickCallback={updateNextNumber} />
        <Button value="8" clickCallback={updateNextNumber} />
        <Button value="9" clickCallback={updateNextNumber} />
        <Button value="4" clickCallback={updateNextNumber} />
        <Button value="5" clickCallback={updateNextNumber} />
        <Button value="6" clickCallback={updateNextNumber} />
        <Button value="1" clickCallback={updateNextNumber} />
        <Button value="2" clickCallback={updateNextNumber} />
        <Button value="3" clickCallback={updateNextNumber} />
        <Button value="0" className="zero" clickCallback={updateNextNumber} />
        <Button value="." clickCallback={updateNextNumber} />
      </div>
      <div id="rightSide">
        <Button className="divide operator" value="÷" clickCallback={updateOperator} />
        <Button className="multiply operator" value="x" clickCallback={updateOperator} />
        <Button className="minus operator" value="-" clickCallback={updateOperator} />
        <Button className="plus operator" value="+" clickCallback={updateOperator} />
        <Button className="equal operator" value="=" clickCallback={calculateNewData} />
      </div>
    </div>
  );
}
