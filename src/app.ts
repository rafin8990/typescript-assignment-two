import express, { Application } from 'express';
import cors from 'cors';
import bookRoute from './app/modules/book/book.route'

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/book', bookRoute)

export default app;