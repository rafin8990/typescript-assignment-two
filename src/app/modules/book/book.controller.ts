import {NextFunction,Request, Response} from "express"
import { CreateBookCollectiontoDB } from "./book.service";
export const createBookCollection= async (req:Request, res:Response, next:NextFunction)=>{
const data =req.body;
const book=await CreateBookCollectiontoDB(data)
res.status(200).json({
    status:'success',
    data:book
})
}