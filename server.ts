import express, { Express, Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import { Server } from "socket.io";
const app: Express = express();
import { createServer } from "http";
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  },
});
const PORT = 5000;

async function main() {
  await prisma.user.create({
    data: {
      username: "Rich",
      email: "hello@prisma.com",
      password:'123456'
    },
  });
}

main();

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
