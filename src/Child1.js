import React, { useEffect, useState } from 'react';

// Not Possible in Function Component

// 1. getSnapshotbeforeUpdate
// 2. getDerivedStateFromError
// 3. componentDidCatch

const Child1 = ({ value }) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    const mouseMove = () => {
      console.log('mouse move');
    };
    document.addEventListener('mousemove', mouseMove);

    const interval = setInterval(() => {
      console.log('interval');
    }, 1000);

    // component will unmount
    return () => {
      document.removeEventListener('mousemove', mouseMove);
      clearInterval(interval);
    };
  }, []);

  const incrementCounter = () => {
    setCounter((val) => val + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={incrementCounter}>
        Increment Counter
      </button>
    </div>
  );
};

export default Child1;
