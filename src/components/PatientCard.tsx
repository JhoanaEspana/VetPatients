import { CustomTitle } from './CustomTitle'
import {
    Pencil,
    Trash2,
    PawPrint,
    User,
    Mail,
    Calendar,
    FileText,
} from 'lucide-react'

export const PatientCard = () => {
    return (
        <>
            <CustomTitle
                icon={<PawPrint className='h-6 w-6 text-accent-foreground' />}
                title='Seguimiento Pacientes'
                badge='ID: 545454...'
            />

            <div className='space-y-3 mb-5'>
                <div className='flex items-center gap-3 text-sm'>
                    <User className='h-4 w-4 text-primary shrink-0' />
                    <span className='text-muted-foreground'>Propietario:</span>
                    <span className='font-semibold text-foreground'>
                        Juan Pérez
                    </span>
                </div>

                <div className='flex items-center gap-3 text-sm'>
                    <Mail className='h-4 w-4 text-primary shrink-0' />
                    <span className='text-muted-foreground'>Email:</span>
                    <span className='font-semibold text-foreground truncate'>
                        juanperez@gmail.com
                    </span>
                </div>

                <div className='flex items-center gap-3 text-sm'>
                    <Calendar className='h-4 w-4 text-primary shrink-0' />
                    <span className='text-muted-foreground'>Fecha Alta:</span>
                    <span className='font-semibold text-foreground'>
                        2025-01-01
                    </span>
                </div>

                <div className='flex items-start gap-3 text-sm'>
                    <FileText className='h-4 w-4 text-primary shrink-0 mt-0.5' />
                    <span className='text-muted-foreground'>Síntomas:</span>
                    <span className='font-medium text-foreground'>
                        Fiebre, dolor de estómago
                    </span>
                </div>
            </div>

            <div className='flex gap-3'>
                <button
                    onClick={() => console.log('Editar')}
                    className='bg-primary text-primary-foreground hover:bg-primary/90 flex-1 h-10 font-semibold shadow-button hover:shadow-lg transition-all duration-300'>
                    <Pencil className='h-4 w-4 mr-2' />
                    Editar
                </button>
                <button
                    onClick={() => console.log('Eliminar')}
                    className='bg-destructive text-destructive-foreground hover:bg-destructive/90 flex-1 h-10 font-semibold hover:scale-[1.02] transition-all duration-300'>
                    <Trash2 className='h-4 w-4 mr-2' />
                    Eliminar
                </button>
            </div>
        </>
    )
}
