import React, { useState } from 'react';

function MyComponent() {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  
  const toggleButton = () => {
    setButtonDisabled(!isButtonDisabled);
  };

  const buttonStyles = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#0074d9',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleClickMyButton = () => {
    alert("My Button Clicked!");
  };

  return (
    <div>
      <button onClick={toggleButton} style={buttonStyles}>
        {isButtonDisabled ? 'Enable Button' : 'Disable Button'}
      </button>
      <button disabled={isButtonDisabled} onClick={handleClickMyButton} style={buttonStyles}>
        My Button
      </button>
    </div>
  );
}

export default MyComponent;
