import { Card } from './Card'
import { CustomTitle } from './CustomTitle'
import { ClipboardList, PawPrint } from 'lucide-react'
import { PatientCard } from './PatientCard'
import { usePatientStore } from '../store/store'

export const PatientList = () => {
    const { patients } = usePatientStore()

    console.log(patients)

    return (
        <>
            <CustomTitle
                icon={
                    <ClipboardList className='h-5 w-5 text-accent-foreground' />
                }
                title='Lista de Pacientes'
                description='Administra tus Pacientes y Citas'
            />

            {patients.length ? (
                <>
                    {patients.map((patient) => (
                        <PatientCard key={patient.id} patient={patient} />
                    ))}
                </>
            ) : (
                <Card>
                    <div className='h-20 w-20 rounded-2xl bg-accent flex items-center justify-center mb-4 animate-pulse-soft'>
                        <PawPrint className='h-10 w-10 text-accent-foreground' />
                    </div>
                    <p className='text-lg mb-2'>No hay pacientes</p>
                    <p className='max-w-xs'>
                        Comienza agregando un nuevo paciente usando el
                        formulario de la izquierda
                    </p>
                </Card>
            )}
        </>
    )
}
