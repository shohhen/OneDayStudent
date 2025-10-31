
interface GenzCardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary';
}

export const GenzCard: React.FC<GenzCardProps> = ({ children, className, variant, ...props }) => {
    const variantClass = variant === 'secondary' ? 'secondary' : '';
    return (
        <div className={`genz-card ${variantClass} ${className}`} {...props}>
            {children}
        </div>
    );
};