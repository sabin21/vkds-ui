import React, { useState } from 'react';
import { Plus, Minus } from "lucide-react";
import { ActionButton } from "@/components/ui/action-button";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface NumericStepperProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string;
}

function NumericStepper({
  initialValue = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  onChange,
  className = ''
}: NumericStepperProps): JSX.Element {
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    const newValue = Math.min(value + step, max);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const decrement = () => {
    const newValue = Math.max(value - step, min);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(Math.min(Number(e.target.value), max), min);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className={cn('numberic-stepper', className)}>
      <ActionButton variant="iconCircleSecondary" onClick={decrement} disabled={value <= min}>
        <Minus />
      </ActionButton>
      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        step={step}
        className='input-text'
      />
      <ActionButton variant="iconCircleSecondary" onClick={increment} disabled={value >= max}>
        <Plus />
      </ActionButton>
    </div>
  );
}

export default NumericStepper;