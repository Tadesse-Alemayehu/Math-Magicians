import React, { PureComponent } from 'react';
import './Calculator.css';

export default class Calculator extends PureComponent {
  render() {
    return (
      <div id="Calculator">
        <div id="result">
          <input type="text" name="result" id="result" value="0" />
        </div>
        <div id="leftSide">
          <span>A/C</span>
          <span>+/-</span>
          <span>%</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span className="zero">0</span>
          <span>.</span>
        </div>
        <div id="rightSide">
          <span className="divide operator" />
          <span className="multiply operator" />
          <span className="minus operator" />
          <span className="plus operator" />
          <span className="equal operator" />
        </div>
      </div>
    );
  }
}
