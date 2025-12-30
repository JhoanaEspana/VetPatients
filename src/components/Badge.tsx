export const Badge = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-secondary text-secondary-foreground text-xs font-medium rounded-full px-2 py-1'>
            {children}
        </div>
    )
}
