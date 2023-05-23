import express from 'express'
import { createBookCollection, getBookByGenre,getBookByGenreAndPublication,retriveBook,stringToIntiger } from './book.controller'


const router=express.Router()
router.post('/createBook',createBookCollection );
// problem two 
router.get('/genre/:genre', getBookByGenre)
// problem three 
router.get('/booksgenpub', getBookByGenreAndPublication)

// problem 4 
router.get('/retrive-book', retriveBook)

// problem 5 
router.get('/stringToIntiger', stringToIntiger);

export default router;