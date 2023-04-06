import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const colors = ['red', 'blue', 'green', 'yellow'];

  return (
    <div>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            width: '50px',
            height: '50px',
            display: 'inline-block',
            margin: '10px',
            cursor: 'pointer',
          }}
          onClick={() => handleColorSelect(color)}
        ></div>
      ))}
      <p>Selected color: {selectedColor}</p>
    </div>
  );
}

export default ColorPicker;
