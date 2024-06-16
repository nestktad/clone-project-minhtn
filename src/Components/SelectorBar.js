import React from 'react';
import icon1 from "../Icons/icon14.png";
import icon2 from "../Icons/icon7.png";
import icon3 from "../Icons/icon1.png";
import icon4 from "../Icons/icon9.png";
import { useState } from 'react';
export default function SelectorBar() {
   const [selectedIndex, setSelectedIndex] = useState(null);

   const handleClick = (index) => {
     setSelectedIndex(index);
   };

   const icons = [
      icon1, icon2, icon3, icon4
   ];
   return (
      <div className="selection-bar">
      {icons.map((icon, index) => (
        <div
          className={`icon-item ${selectedIndex === index ? 'selected' : ''}`}
          key={index}
          onClick={() => handleClick(index)}
        >
          <img src={icon} alt={`Icon ${index + 1}`} />
        </div>
      ))}
    </div>
   );
}