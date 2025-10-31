import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    // variant 'secondary' теперь добавляет класс 'alt-hover'
    variant?: 'secondary';
}

export const Card: React.FC<CardProps> = ({ children, className, variant, ...props }) => {
    // Новый базовый класс 'card'
    const baseClass = 'card';
    // Добавляем 'alt-hover' если variant === 'secondary'
    const variantClass = variant === 'secondary' ? 'alt-hover' : '';

    return (
        <div className={`${baseClass} ${variantClass} ${className}`} {...props}>
            {children}
        </div>
    );
};