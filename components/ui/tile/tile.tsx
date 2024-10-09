import React, { ReactNode } from 'react';

interface TileProps {
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
  children: ReactNode;
  selectable: boolean;
}

const Tile = ({ value, selected, onSelect, children, selectable }: TileProps): ReactNode => {
  const handleClick = () => {
    if (selectable) {
      onSelect(value);
    }
  };

  return (
    <div
      className={selected ? "tile selected": "tile" }
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Tile;