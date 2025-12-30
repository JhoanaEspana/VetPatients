type CardProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

export const Card = ({ children, style }: CardProps) => {
    return (
        <div
            style={style}
            className='bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 w-full'>
            {children}
        </div>
    )
}
