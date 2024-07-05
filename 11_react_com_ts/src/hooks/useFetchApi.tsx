import React from 'react'
import { useState, useEffect } from 'react'

interface Post {
        userId: number,
        id:  number,
        title: string,
        body: string
}

const useFetchApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<Post[]>([])

    const url = "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
             let response = await fetch(url)
             if(!response.ok) {
                throw new Error("Erro ao acessar a API")
             }
             let data = await response.json()
             setData(data)
            } catch (error) {
                setError((error as Error).message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return {
        loading,
        error,
        data
    }
}

export default useFetchApi