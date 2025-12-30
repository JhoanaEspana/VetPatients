import { Stethoscope, Heart } from 'lucide-react'

export const Header = () => {
    return (
        <header className='gradient-header py-6 px-4 mb-8 shadow-lg'>
            <div className='container mx-auto flex items-center justify-center gap-4'>
                <div className='flex items-center gap-2'>
                    <div className='h-12 w-12 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center'>
                        <Stethoscope className='h-7 w-7 text-primary-foreground' />
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl font-extrabold text-primary-foreground flex items-center gap-2 flex-wrap justify-center'>
                        Seguimiento de Pacientes{' '}
                        <span className='text-primary-foreground flex items-center gap-1'>
                            Veterinaria
                            <Heart className='h-5 w-5 text-primary-foreground animate-pulse-soft' />
                        </span>
                    </h1>
                    <p className='text-primary-foreground text-sm mt-1 font-medium'>
                        Sistema de gestión de pacientes veterinarios
                    </p>
                </div>
            </div>
        </header>
    )
}
