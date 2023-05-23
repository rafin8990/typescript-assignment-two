import { NextFunction, Request, Response } from "express"
import { CreateBookCollectiontoDB, getBooksByGenreFromDB } from "./book.service";


// get book collection specific genre 

export const getBookByGenre = async (req: Request, res: Response, next: NextFunction) => {
    const genre = req.params.genre;
    const books = await getBooksByGenreFromDB(genre)
    res.status(200).json({
        status: 'success',
        data: books
    })
}


// post book collection to db 
export const createBookCollection = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const book = await CreateBookCollectiontoDB(data)
   res.status(200).json({
        status: 'success',
        data: book
    }) 
}