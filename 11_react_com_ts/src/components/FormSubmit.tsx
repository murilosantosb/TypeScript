import React, { useState } from 'react'



const FormSubmit: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let value = e.target.value 
        setEmail(value)
        if(error) setError(null)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if(!email) {
            setError("Você não enviou seu e-mail")
            return
        }
            console.log(`Seu E-mail foi encaminhado , Obrigado!`)


        
    }

  return (
    <form onSubmit={handleSubmit} className='form-state'>
        <label>
            <span>Seu E-mail:</span>
            <input
                type="email"
                onChange={handleChange}
            />
        </label>
        <button type='submit'>Enviar</button>
        {error && (
            <span className='error'>
                {error}
            </span>
        )}
    </form>
  )
}

export default FormSubmit