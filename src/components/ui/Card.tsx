import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({children, className = '', onClick}) => (
    <div onClick={onClick}
         className={`rounded-xl shadow-lg transition-all duration-300 ${onClick ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-2' : ''} ${className}`}>
        <div className="glass-card rounded-xl p-6 h-full">{children}</div>
    </div>
);
