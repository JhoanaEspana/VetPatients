import { Card } from './Card'
import { CustomTitle } from './CustomTitle'
import { ClipboardList } from 'lucide-react'
import { PatientCard } from './PatientCard'

export const PatientList = () => {
    return (
        <>
            <CustomTitle
                icon={
                    <ClipboardList className='h-5 w-5 text-accent-foreground' />
                }
                title='Lista de Pacientes'
                description='Administra tus Pacientes y Citas'
            />
            <Card>
                <PatientCard />
            </Card>
        </>
    )
}
