import React from 'react'
import { useState } from 'react'

type InputStateProps = {}

const InputState: React.FC<InputStateProps> = () => {
    const [name, setName] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value 
        setName(value)
    }

  return (
    <div>
        <label>
            <span>Name:</span>
            <input
                type="text"
                onChange={handleChange}
                />
        </label>
        <p>{name}</p>
    </div>
  )
}

export default InputState