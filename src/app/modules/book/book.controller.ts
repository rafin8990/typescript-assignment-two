import { NextFunction, Request, Response } from "express"
import { CreateBookCollectiontoDB, getBooksByGenreFromDB, getBookDataByGenreAndPublicationFromDB,retrieveFeaturedBooksFromDB,updatePublishedBooksFromDB } from "./book.service";

// problem two
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

// third problem
//get book collection by genre and publisher
export const getBookByGenreAndPublication = async (req: Request, res: Response, next: NextFunction) => {
    const book = await getBookDataByGenreAndPublicationFromDB()
    res.status(200).json({
        status: 'success',
        data: book
    })
}

// fourth problem 
// retrieving books with featured Data

export const retriveBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book: void = await retrieveFeaturedBooksFromDB();
        res.status(200).json({
            status: "success",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to retrieve featured books",
        });
    }
};


// problem five 
// string to intiger

export const stringToIntiger = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const book = await updatePublishedBooksFromDB();
    res.status(200).json({
      status: "success",
      data: book,
    });
  };


