import { create } from 'zustand'
import type { DraftPatient, Patient } from '../types'

interface PatientState {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

export const usePatientStore = create<PatientState>(() => ({
    patients: [],

    addPatient: (data) => {
        console.log('Nuevo Paciente agregado:', data)
    },
}))
