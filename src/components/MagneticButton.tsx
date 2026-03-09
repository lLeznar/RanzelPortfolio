import React from 'react';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className = "", strength = 0.35 }: MagneticButtonProps) {
  const ref = useMagneticEffect(strength);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
    </div>
  );
}
