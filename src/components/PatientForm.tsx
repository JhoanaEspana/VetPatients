import { PawPrint } from 'lucide-react'
import { Card } from './Card'
import { CustomTitle } from './CustomTitle'
import { useForm } from 'react-hook-form'
import { Error } from './Error'
import type { DraftPatient } from '../types'
import { usePatientStore } from '../store/store'

export const PatientForm = () => {
    const { addPatient } = usePatientStore()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DraftPatient>()

    const registerPatient = (data: DraftPatient) => {
        addPatient(data)
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

                <input
                    type='submit'
                    className='bg-primary text-primary-foreground w-full p-3 font-semibold hover:bg-primary/90 cursor-pointer transition-colors'
                    value='Guardar Paciente'
                />
            </form>
        </Card>
    )
}
