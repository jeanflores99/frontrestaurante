import { useState } from 'react'
import { CreateMesaDto } from '@dto/mesa/CreateMesa.dto'

const InitialValue: CreateMesaDto = {
    etiqueta: '',
    free: true,
    total: 0,
    piso: '',
    location: '',
    active: true,
    mozo: 0
}

export const index = () => {

    const [Form, setForm] = useState<CreateMesaDto>(InitialValue)

    const handleForm = (name: string, value: string | number) => setForm((oldValue) => ({ ...oldValue, [name]: value }))


    return (
        <div className='flex justify-center'>
            <form className=''>
                <div className='flex flex-col max-w-lg'>
                    <div>
                        <label>Etiqueta</label>
                        <input
                            className='input max-w-xs w-full bg-white'
                            name='etiqueta'
                            value={Form?.etiqueta || ''}
                            onChange={({ target }) => handleForm(target.name, target.value)}
                        />
                    </div>
                    <div>
                        <label>Descripción</label>
                        <input className='input max-w-xs w-full bg-white' />
                    </div>
                    <div>
                        <label>Piso</label>
                        <input className='input max-w-xs w-full bg-white' />
                    </div>
                    <div>
                        <label>Ubicación</label>
                        <input className='input max-w-xs w-full bg-white' />
                    </div>
                    <div className='mt-4 flex justify-end'>
                        <button className='btn btn-accent'>Registrar</button>
                    </div>
                </div>
            </form>

        </div>

    )
}
export default index
