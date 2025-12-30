export interface ErrorProps {
    children: React.ReactNode
}

export const Error = ({ children }: ErrorProps) => {
    return <p className='text-sm text-red-500 mt-2'>{children}</p>
}
