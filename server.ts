import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import { Server } from "socket.io";
const app: Express = express();
const server = require('http').createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://127.0.0.1:5173",
      methods: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    },
  });
const PORT = 5000
const prisma = new PrismaClient()

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
