import React, { useState, useEffect } from 'react';

export default function InputForm({
  // handleInputChange,
  investment,
  getInvestment,
  profitFormula,
  setInvestment }) {

  useEffect(() => {
    profitFormula();
  }, [investment, profitFormula]);

  const handleInputChange = (e) => {
    setInvestment(parseFloat(e.target.value));
    profitFormula()
  };


  const increaseInvestment = () => {
    setInvestment((prevInvestment) => {
      const newValue = parseFloat((prevInvestment + 1).toFixed(2));
      return newValue >= 0 ? newValue : prevInvestment;
    });
    profitFormula()
  };

  const decreaseInvestment = () => {
    setInvestment((prevInvestment) => {
      const newValue = parseFloat((prevInvestment - 1).toFixed(2));
      return newValue >= 0 ? newValue : prevInvestment;
    });
    profitFormula()
  };

  return (
    <div>
      <div className="binary-input-form-wrap">
        <div className="binary-input-form-label"> Investment: </div>
        <div className="binary-input-form">
          <button
            className="binary-input-form-button"
            onClick={decreaseInvestment}
          >
            -
          </button>
          <input
            type="number"
            className="binary-input"
            placeholder='0 USDT'
            value={investment}
            onChange={handleInputChange}
            min={0}
            step="any"
          />
          <button
            className="binary-input-form-button"
            onClick={increaseInvestment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
