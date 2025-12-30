import { usePatientStore } from '../store/store'
import type { Patient } from '../types'
import { Button } from './Button'
import { Card } from './Card'
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

type PatientCardProps = {
    patient: Patient
}

export const PatientCard = ({ patient }: PatientCardProps) => {
    const { deletePatient, getPatientById } = usePatientStore()

    return (
        <Card style={{ marginBottom: '1rem' }}>
            <CustomTitle
                icon={<PawPrint className='h-6 w-6 text-accent-foreground' />}
                title={patient.name}
                badge={patient.id}
            />

            <div className='space-y-3 mb-5'>
                <div className='flex items-center gap-3 text-sm'>
                    <User className='h-4 w-4 text-primary shrink-0' />
                    <span className='text-muted-foreground'>Propietario:</span>
                    <span className='font-semibold text-foreground'>
                        {patient.caretaker}
                    </span>
                </div>

                <div className='flex items-center gap-3 text-sm'>
                    <Mail className='h-4 w-4 text-primary shrink-0' />
                    <span className='text-muted-foreground'>Email:</span>
                    <span className='font-semibold text-foreground truncate'>
                        {patient.email}
                    </span>
                </div>

                <div className='flex items-center gap-3 text-sm'>
                    <Calendar className='h-4 w-4 text-primary shrink-0' />
                    <span className='text-muted-foreground'>Fecha Alta:</span>
                    <span className='font-semibold text-foreground'>
                        {patient.date.toString()}
                    </span>
                </div>

                <div className='flex items-start gap-3 text-sm'>
                    <FileText className='h-4 w-4 text-primary shrink-0 mt-0.5' />
                    <span className='text-muted-foreground'>Síntomas:</span>
                    <span className='font-medium text-foreground'>
                        {patient.symptoms}
                    </span>
                </div>
            </div>

            <div className='flex gap-3'>
                <Button
                    type='button'
                    onClick={() => {
                        getPatientById(patient.id)
                    }}
                    icon={<Pencil className='h-5 w-5 mr-2' />}
                    label='Editar'
                    variant='primary'
                />
                <Button
                    type='button'
                    onClick={() => {
                        deletePatient(patient.id)
                    }}
                    icon={<Trash2 className='h-5 w-5 mr-2' />}
                    label='Eliminar'
                    variant='destructive'
                />
            </div>
        </Card>
    )
}
