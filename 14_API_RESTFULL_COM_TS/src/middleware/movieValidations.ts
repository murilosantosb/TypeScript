import { body } from 'express-validator'

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("O título é obrigatório!")
            .isLength({min: 5})
            .withMessage("O título precisa de pelo menos 5 caracteres."),
        body("rating")   
            .isNumeric()
            .withMessage("Avaliação precisa ser um número.")
            .custom((value: number) => {
                if(value < 0 || value > 10) {
                    throw new Error("A nota precisa ser de 0 a 10")
                }
                return true
            }) ,
        body("description")
            .isString()
            .withMessage("A descrição é obrigatória!"),
        body("director")      
            .isString()
            .withMessage("É obrigatório informar o diretor."),
        body("poster")
            .isURL()
            .withMessage("A imagem precisar ser uma URL!")
    ]
}