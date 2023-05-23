import express from 'express'
import { createBookCollection } from './book.controller'


const router=express.Router()
router.post('/createUser',createBookCollection )

export default router;