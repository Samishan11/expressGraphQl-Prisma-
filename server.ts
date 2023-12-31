import express, { Express, Request, Response } from "express";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
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

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => "Hello world!",
      },
    },
  }),
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
