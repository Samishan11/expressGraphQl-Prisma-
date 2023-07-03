import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import { Server } from "socket.io";
const app: Express = express();
import { createServer } from 'http';
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  },
});
const PORT = 5000

async function main() {
  await prisma.$connect();

  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  await prisma.user.create({
    data:{
      username:"Samishan",
      email:"samishan@gmail.com",
      password:"helloworld"
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
