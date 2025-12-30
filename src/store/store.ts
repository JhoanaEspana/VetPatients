import { create } from 'zustand'
import type { DraftPatient, Patient } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { createJSONStorage, persist } from 'zustand/middleware'

interface PatientState {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return {
        id: uuidv4(),
        ...patient,
    }
}

export const usePatientStore = create<PatientState>()(
    persist(
        (set) => ({
            patients: [],
            activeId: '',

            addPatient: (data: DraftPatient) => {
                const newPatient = createPatient(data)

                set((state: PatientState) => ({
                    patients: [...state.patients, newPatient],
                }))
            },

            deletePatient: (id: Patient['id']) => {
                set((state: PatientState) => ({
                    patients: state.patients.filter(
                        (patient: Patient) => patient.id !== id
                    ),
                }))
            },

            getPatientById: (id: Patient['id']) => {
                set(() => ({
                    activeId: id,
                }))
            },

            updatePatient: (data: DraftPatient) => {
                set((state: PatientState) => ({
                    patients: state.patients.map((patient: Patient) =>
                        patient.id === state.activeId
                            ? { id: state.activeId, ...data }
                            : patient
                    ),
                    activeId: '',
                }))
            },
        }),
        {
            name: 'patient-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)
