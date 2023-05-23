import { IBook } from "./book.interface";
import Book from "./book.model";

export const CreateBookCollectiontoDB= async(payload:IBook):Promise<IBook>=>{
    const book=new Book(payload);
    return book;
}