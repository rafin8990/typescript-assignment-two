import express from 'express'
import { createBookCollection, getBookByGenre,getBookByGenreAndPublication,retriveBook } from './book.controller'


const router=express.Router()
router.post('/createBook',createBookCollection );
// problem two 
router.get('/:genre', getBookByGenre)
// problem three 
router.get('/booksgenpub', getBookByGenreAndPublication)

// problem 4 
router.get('/retrive-book', retriveBook)

export default router;