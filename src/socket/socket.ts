import expressAsyncHandler from "express-async-handler";
import { Server } from "socket.io";

export const connectedUsers = new Map();

export const SocketFucntion = expressAsyncHandler(async (io: Server) => {
  io.on("connection", (socket: any) => {
    console.log("A user connected:", socket.handshake.query.userId);
    const userId = socket.handshake.query.userId;
    connectedUsers.set(socket.id, {
      userId: userId,
      socket: socket,
    });

    //  socket disconnect
    socket.on("disconnect", () => {
      console.log(`User: ${socket.handshake.query.userId} disconnected`);
      connectedUsers.delete(socket.id);
    });
  });
});
