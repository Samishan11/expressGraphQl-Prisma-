import express, { Express, Request, Response } from 'express';

const PORT = 5000
const app: Express = express();

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})
