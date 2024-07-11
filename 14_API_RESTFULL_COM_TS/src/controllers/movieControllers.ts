import {Request, Response} from 'express'

// Model
import { MovieModel } from '../models/Movie'

// Logger
import Logger from '../../config/logger'

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function findMovieById(req: Request, res: Response) {
    try {
        
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({error: "O filme não existe."})
        }

        return res.status(200).json(movie)

    } catch (error : any) {
        Logger.error(`Erro no sistema: ${error.message}`)
        return res.status(500).json({ error: "Erro no sistema. Por favor, tente novamente mais tarde." });
    }
}

export async function movieAll(req: Request, res: Response) {
    try {
        const request = req.body
        const data = await MovieModel.find(request)

        if(!data){
            return res.status(404).json({ error: "Ainda não tem filmes postados." })
        }

        return res.status(200).json(data)

    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`)
        return res.status(500).json({ error: "Erro no sistema." })
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const movie = req.params.id
        const removeById: any = await MovieModel.findByIdAndDelete(movie)

        if(!movie) {
            return res.status(404).json({ error: "O filme não existe." })
        }

        return res.status(200).json({ message: `Filme deletado com sucesso ${removeById.title}` })

    } catch (error: any) {
        Logger.error(`Erro no sistema ${error.message}`)
        return res.status(500).json({ error: "Erro no sistema." })
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {
        const movieId = req.params.id 
        const data = await req.body
        const movie = await MovieModel.findById(movieId)

        if(!movie) {
            return res.status(404).json({ error: "Filme não existe." })
        }

        await MovieModel.updateOne({_id: movieId}, data)

        return res.status(200).json(data)

    } catch (error: any) {
        Logger.error(error.message)
        return res.status(500).json({ error: "Erro no sistema." })
    }
}