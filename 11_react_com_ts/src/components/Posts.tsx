import React from 'react'
import useFetchApi from '../hooks/useFetchApi'

const Posts = () => {
    const { data, error, loading } = useFetchApi()

  return (
    <div>
        {loading && loading ? (
            <p>Carregando...</p>
        ) : (
            <>
                {data && data.map((data) => (
                    <span key={data.id}>
                        <h3>{data.title}</h3>
                        <p>{data.body}</p>
                    </span>
                ))}
            </>
        )}
        {error && (
            <p>{error}</p>
        )}
    </div>
  )
}

export default Posts