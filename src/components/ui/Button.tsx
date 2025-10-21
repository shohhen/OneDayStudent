import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  onClick,
                                                  className = '',
                                                  type = 'button',
                                                  disabled = false
                                              }) => {
    const baseClasses = "inline-flex glass-card items-center justify-center rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95";
    const variants = "bg-primary text-primary-foreground hover:bg-primary/90";
    return <button type={type} onClick={onClick} className={`${baseClasses} ${variants} ${className}`}
                   disabled={disabled}>{children}</button>;
};
