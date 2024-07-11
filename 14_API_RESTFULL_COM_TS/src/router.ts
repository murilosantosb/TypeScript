import { Router, Request, Response } from "express";

// Controller
import { createMovie, findMovieById, movieAll, removeMovie, updateMovie } from './controllers/movieControllers'
import { movieCreateValidation } from "./middleware/movieValidations";
import { validate } from "./middleware/handleValidations";

const router = Router()

export default router
    .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!")
    }) 
    .post("/movie", movieCreateValidation(), validate ,createMovie)
    .get("/movie/:id", findMovieById)
    .get("/movie", movieAll)
    .delete("/movie/:id", removeMovie)
    .patch("/movie/:id", movieCreateValidation(), validate, updateMovie )