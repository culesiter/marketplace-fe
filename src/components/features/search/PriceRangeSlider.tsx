"use client";
import React, { useState } from 'react';

export default function PriceRangeSlider() {
  const [value, setValue] = useState(500);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const percentage = (value / 1000) * 100;

  return (
    <div className="sidebar-item range-feature">
      <h4>Price Range</h4>
      <hr className="line-separator spaced" />
      
      {/* Visual Slider Structure (Matching jquery.range plugin architecture from template) */}
      <div className="slider-container theme-edragon" style={{ width: '100%', padding: '10px 0 25px' }}>
        <div className="back-bar" style={{ position: 'relative' }}>
          <div 
            className="selected-bar" 
            style={{ position: 'absolute', height: '100%', left: '0', width: `${percentage}%` }}
          ></div>
          <div 
            className="pointer" 
            style={{ 
                position: 'absolute', 
                left: `${percentage}%`, 
                marginTop: '0px',
                transform: 'translateX(-50%)',
                zIndex: 2
            }}
          ></div>
          <div 
            className="pointer-label" 
            style={{ 
                position: 'absolute', 
                left: `${percentage}%`, 
                top: '20px', 
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap'
            }}
          >
            ${value}
          </div>
          
          {/* Hidden functional input overlapping the visual bar */}
          <input 
            type="range"
            min="0"
            max="1000"
            value={value}
            onChange={handleUpdate}
            style={{
              position: 'absolute',
              top: '-15px',
              left: '0',
              width: '100%',
              height: '40px',
              opacity: 0,
              cursor: 'pointer',
              zIndex: 10
            }}
          />
        </div>
      </div>
      
      <button className="button mid primary">Update your Search</button>
    </div>
  );
}
