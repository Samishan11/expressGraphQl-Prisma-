import { PrismaClient, Prisma } from "@prisma/client";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  shouldRenderGraphiQL,
} from "graphql-helix";

const prisma = new PrismaClient();

export const registerUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password, username } = req.body;
    if (shouldRenderGraphiQL(request)) {
      res.send(renderGraphiQL());
    } else {
      const { operationName, query, variables } = getGraphQLParameters(request);

      const result = await processRequest({
        operationName,
        query,
        variables,
        request,
        schema,
      });

      if (result.type === "REQUEST") {
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (user) {
          return res.status(409).json({ message: "user already exst" });
        }
        await prisma.user.create({
          data: {
            username: "Rich",
            email: "hello@prisma.com",
            password: "123456",
          },
        });
        return res.status(200).json({ message: "user create sucessfully" });
      }
    }
  }
);
