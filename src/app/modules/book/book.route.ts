import express from 'express'
import { createBookCollection, getBookByGenre } from './book.controller'


const router=express.Router()
router.get('/:genre', getBookByGenre)
router.post('/createBook',createBookCollection )

export default router;