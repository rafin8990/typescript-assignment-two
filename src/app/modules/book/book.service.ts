import { IBook } from "./book.interface";
import Book from "./book.model";


export const getBooksByGenreFromDB=async(payload:string):Promise<IBook | null>=>{
    const books=await Book.findOne({genre:payload})
    return books;
}


export const CreateBookCollectiontoDB= async(payload:IBook):Promise<IBook>=>{
    const book=new Book(payload);
    return book;
}