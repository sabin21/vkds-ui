import React, { ReactNode } from 'react';

export interface TileInputProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TileRadio = ({ checked, onChange }: TileInputProps): ReactNode => (
  <input 
    type="radio" 
    checked={checked} 
    onChange={onChange}
  />
);

export const TileCheckbox = ({ checked, onChange }: TileInputProps): ReactNode => (
  <input 
    type="checkbox" 
    checked={checked} 
    onChange={onChange}
  />
);

export const TileSwitch = ({ checked, onChange }: TileInputProps): ReactNode => (
  <label 
    style={{ display: 'inline-block', width: '60px', height: '34px', position: 'relative' }}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{ opacity: 0, width: 0, height: 0 }}
    />
    <span
      style={{
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: checked ? '#2196F3' : '#ccc',
        transition: '.4s',
        borderRadius: '34px',
      }}
    >
      <span
        style={{
          position: 'absolute',
          content: '""',
          height: '26px',
          width: '26px',
          left: checked ? '26px' : '4px',
          bottom: '4px',
          backgroundColor: 'white',
          transition: '.4s',
          borderRadius: '50%',
        }}
      />
    </span>
  </label>
);