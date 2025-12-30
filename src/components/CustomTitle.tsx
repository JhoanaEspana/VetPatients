import { Badge } from './Badge'

type CustomTitleProps = {
    title: string
    description?: string
    icon?: React.ReactNode
    badge?: string
}

export const CustomTitle = ({
    title,
    description,
    icon,
    badge,
}: CustomTitleProps) => {
    return (
        <div className='flex items-center gap-3 mb-8'>
            <div className='h-10 w-10 rounded-xl bg-accent flex items-center justify-center'>
                {icon}
            </div>
            <div>
                <p className='text-xl font-bold'>{title}</p>
                <p className='text-sm text-muted-foreground'>{description}</p>

                <div className='flex items-center gap-2'>
                    {badge && <Badge>ID: {badge}</Badge>}
                </div>
            </div>
        </div>
    )
}
