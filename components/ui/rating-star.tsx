import React, { forwardRef } from 'react';
import { Star } from 'lucide-react';

interface RatingStarProps {
  rating: number;
  color?: string;
}

const RatingStar = forwardRef<HTMLDivElement, RatingStarProps>(({
  rating,
  color = '#FF6A79',
}, ref) => {
  const renderSquare = (index: number) => {
    const value = index + 1;
    const isHalfSquare = rating === value - 0.5;
    const isFullSquare = rating >= value;

    return (
      <div
        key={index}
        style={{
          position: 'relative', display: 'inline-block', overflow:'hidden',
          width: '16px', height: '16px', borderRadius: '3px',
          marginRight: '2px',
        }}
      >
        <Star 
          style={{
            position:'absolute', fill:'white', color:'white',
            width:'12px', height:'12px', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', zIndex:'2'
          }}
        />
        <div
          style={{
            width: '100%', height: '100%',
            backgroundColor: isFullSquare ? color : '#e0e0e0',
          }}
        />
        {isHalfSquare && (
          <div
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '50%', height: '100%', backgroundColor: color,
            }}
          />
        )}
        
      </div>
    );
  };

  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(5)].map((_, index) => renderSquare(index))}
    </div>
  );
});

RatingStar.displayName = 'RatingStar';

export default RatingStar;