import { PawPrint, Save } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { DraftPatient } from '../types'
import { usePatientStore } from '../store/store'
import { Button, Card, CustomTitle, Error } from './index'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const PatientForm = () => {
    const { addPatient, activeId, patients, updatePatient } = usePatientStore()

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<DraftPatient>()

    useEffect(() => {
        if (activeId) {
            const activePatient = patients.filter(
                (patient) => patient.id === activeId
            )[0]
            console.log(activePatient)
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('email', activePatient.email)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
        }
    }, [activeId, patients, setValue])

    const registerPatient = (data: DraftPatient) => {
        if (activeId) {
            updatePatient(data)
            toast.success('Paciente actualizado correctamente')
        } else {
            addPatient(data)
            toast.success('Paciente registrado correctamente')
        }
        reset()
    }

    return (
        <Card>
            <CustomTitle
                icon={<PawPrint className='h-5 w-5 text-accent-foreground' />}
                title='Seguimiento Pacientes'
                description='Añade Pacientes y Administralos'
            />

            <form
                className='space-y-8'
                onSubmit={handleSubmit(registerPatient)}
                noValidate>
                <div className='mb-5'>
                    <label
                        htmlFor='name'
                        className='text-sm font-semibold flex items-center gap-2 mb-2'>
                        Paciente
                    </label>
                    <input
                        id='name'
                        className='w-full p-3 border border-gray-100'
                        type='text'
                        placeholder='Nombre del Paciente'
                        {...register('name', {
                            required: 'El nombre es requerido',
                        })}
                    />
                    {errors.name && <Error>{errors.name.message}</Error>}
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='caretaker'
                        className='text-sm font-semibold flex items-center gap-2 mb-2'>
                        Propietario
                    </label>
                    <input
                        id='caretaker'
                        className='w-full p-3 border border-gray-100'
                        type='text'
                        placeholder='Nombre del Propietario'
                        {...register('caretaker', {
                            required: 'El propietario es requerido',

                            /* maxLength: {
                                value: 8,
                                message:
                                    'El propietario debe tener al menos 8 caracteres',
                            }, */
                        })}
                    />
                    {errors.caretaker && (
                        <Error>{errors.caretaker.message}</Error>
                    )}
                    {/* {errors.maxLength && (
                        <Error>{errors.maxLength.message as string}</Error>
                    )} */}
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='email'
                        className='text-sm font-semibold flex items-center gap-2 mb-2'>
                        Email
                    </label>
                    <input
                        id='email'
                        className='w-full p-3  border border-gray-100'
                        type='email'
                        placeholder='Email de Registro'
                        {...register('email', {
                            required: 'El email es requerido',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'El email no es válido',
                            },
                        })}
                    />
                    {errors.email && <Error>{errors.email.message}</Error>}
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='date'
                        className='text-sm font-semibold flex items-center gap-2 mb-2'>
                        Fecha Alta
                    </label>
                    <input
                        id='date'
                        className='w-full p-3  border border-gray-100'
                        type='date'
                        {...register('date', {
                            required: 'La fecha es requerida',
                        })}
                    />
                    {errors.date && <Error>{errors.date.message}</Error>}
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='symptoms'
                        className='text-sm font-semibold flex items-center gap-2 mb-2'>
                        Síntomas
                    </label>
                    <textarea
                        id='symptoms'
                        className='w-full p-3  border border-gray-100'
                        placeholder='Síntomas del paciente'
                        {...register('symptoms', {
                            required: 'Los síntomas son requeridos',
                        })}
                    />
                    {errors.symptoms && (
                        <Error>{errors.symptoms.message}</Error>
                    )}
                </div>

                <Button
                    type='submit'
                    icon={<Save className='h-5 w-5 mr-2' />}
                    label='Guardar Paciente'
                    variant='primary'
                />
            </form>
        </Card>
    )
}
