import React from 'react'
import { Category } from '../types/Category'

interface Props {
    color: string,
    background_color: string

    category: Category
    
}

type VariaveisText = string | null

const FirstComponent: React.FC<Props> = ({ color, background_color, category}) => {
    let a: VariaveisText = "A"
    let b: VariaveisText

  return (
    <div style={{backgroundColor: `${background_color}`}}>
        <h1 style={{color: `${color}`}}>
            Componente Personalizado {category}
        </h1>
    </div>
  )
}

export default FirstComponent