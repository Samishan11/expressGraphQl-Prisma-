import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const PORT = 5000
const app: Express = express();

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})
