import React, { useState, useRef, useEffect } from 'react';

function Text() {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleButtonClick = () => {
    setText(text.toUpperCase());
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <textarea className="box-1"placeholder="Enter your text" value={text} onChange={handleTextAreaChange} ref={textareaRef}/>
      <button onClick={handleButtonClick}>Convert to Uppercase</button>
    </>
  );
}

export default Text;
