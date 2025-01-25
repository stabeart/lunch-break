// /components/ui/alert.jsx
import React from 'react';

export const Alert = ({ children, variant = 'default' }) => {
  const bgColor = variant === 'destructive' ? 'bg-red-100' : 'bg-blue-100';
  const textColor = variant === 'destructive' ? 'text-red-900' : 'text-blue-900';
  
  return (
    <div className={`p-4 rounded-md ${bgColor} ${textColor}`}>
      {children}
    </div>
  );
};

export const AlertTitle = ({ children }) => (
  <h5 className="font-medium mb-1">{children}</h5>
);

export const AlertDescription = ({ children }) => (
  <div className="text-sm">{children}</div>
);