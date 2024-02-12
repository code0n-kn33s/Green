import React, { useState, useEffect } from 'react';

export default function InputForm(params) {
  const [investment, setInvestment] = useState(0);

  useEffect(() => {
    params.getInvestment(investment)
  }, [investment])

  const handleInputChange = (e) => {
    setInvestment(parseFloat(e.target.value));
  };

  const increaseInvestment = () => {
    setInvestment((prevInvestment) => {
      const newValue = parseFloat((prevInvestment + 1).toFixed(2));
      return newValue >= 0 ? newValue : prevInvestment;
    });
  };

  const decreaseInvestment = () => {
    setInvestment((prevInvestment) => {
      const newValue = parseFloat((prevInvestment - 1).toFixed(2));
      return newValue >= 0 ? newValue : prevInvestment;
    });
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
