import React from 'react'

interface Props {
    name: string,
    age: number,
    nickname?: string
}

const TipsProps: React.FC<Props> = ({ name, age, nickname }) => {
  return (
    <div>
        {nickname && nickname ? (
            <>
                <h2>Seja bem-vindo {nickname}</h2>
                <p>{name}</p>
                <p>{age}</p>
            </>
        ) : (
           <>
                <h2>Seja bem-vindo</h2>
                <p>{name}</p>
                <p>{age}</p>
           </>
        )}
    </div>
  )
}

export default TipsProps