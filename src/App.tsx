import { ToastContainer } from 'react-toastify'
import './App.css'
import { Header, PatientForm, PatientList } from './components'

function App() {
    return (
        <>
            <div className='min-h-screen bg-background'>
                <Header />

                <main className='container mx-auto px-4 pb-12'>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className='lg:sticky lg:top-8 lg:self-start'>
                            <PatientForm />
                        </div>

                        <div className='min-h-[500px] md:h-screen overflow-y-scroll custom-scrollbar'>
                            <PatientList />
                        </div>
                    </div>
                </main>
            </div>

            <ToastContainer />
        </>
    )
}

export default App
