/* eslint-disable no-alert */
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decreaseHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ display: 'flex', width: 100, justifyContent: 'space-between' }}>
      <button type="button" onClick={() => increaseHandler()}>
        +
      </button>
      <div>{count}</div>
      <button type="button" onClick={() => decreaseHandler()}>
        -
      </button>
    </div>
  );
};

export default Counter;
