import React, { ReactNode, useState } from 'react';
import Tile from '@/components/ui/tile/tile';

interface TileOption {
  value: string;
  content: ReactNode;
}

interface TileGroupProps {
  options: TileOption[];
  onSelectionChange: (selectedValues: string[]) => void;
  maxSelections?: number;
  multiSelect?: boolean;
  selectable?: boolean;
}

const TileGroup = ({ options, onSelectionChange, maxSelections, multiSelect = false, selectable = true }: TileGroupProps): ReactNode => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    if (!selectable) return;

    setSelectedValues((prevSelected) => {
      let newSelected;
      if (multiSelect) {
        if (prevSelected.includes(value)) {
          newSelected = prevSelected.filter((v) => v !== value);
        } else {
          if (maxSelections && prevSelected.length >= maxSelections) {
            newSelected = [...prevSelected.slice(1), value];
          } else {
            newSelected = [...prevSelected, value];
          }
        }
      } else {
        newSelected = prevSelected.includes(value) ? [] : [value];
      }
      onSelectionChange(newSelected);
      return newSelected;
    });
  };

  return (
    <div className='tile-list'>
      
      <div className='tile-list-inner'>
        {options.map((option) => (
          <Tile
            key={option.value}
            value={option.value}
            selected={selectedValues.includes(option.value)}
            onSelect={handleSelect}
            selectable={selectable}
          >
            {option.content}
          </Tile>
        ))}
      </div>
      {multiSelect && maxSelections && (
        <p className='tile-list-desc'>최대 {maxSelections}개까지 선택 가능합니다.
         {/* (현재 선택: {selectedValues.length}) */}
        </p>
      )}
    </div>
  );
};

export default TileGroup;