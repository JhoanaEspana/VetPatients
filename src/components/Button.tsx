interface ButtonProps {
    label: string
    icon?: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'destructive'
    onClick?: () => void
}

export const Button = ({
    label,
    icon,
    variant = 'primary',
    type = 'button',
    onClick,
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                variant === 'destructive'
                    ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90 cursor-pointer rounded-md flex-1 h-10 font-semibold shadow-button hover:shadow-lg transition-all duration-300 w-full'
                    : 'bg-primary text-primary-foreground cursor-pointer rounded-md hover:bg-primary/90 flex-1 h-10 font-semibold shadow-button hover:shadow-lg transition-all duration-300 w-full'
            }>
            <span className='flex items-center justify-center'>
                {icon && <span className='mr-2'>{icon}</span>}
                <span className='text-lg font-semibold'>{label}</span>
            </span>
        </button>
    )
}
