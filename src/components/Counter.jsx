import React, { useState, useEffect } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Counter App</h1>
      <p style={styles.count}>Count: {count}</p>
      <button style={styles.button} onClick={increment}>Increment</button>
      <button style={styles.button} onClick={decrement}>Decrement</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  count: {
    fontSize: '18px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer',
  },
};

export default CounterApp;
