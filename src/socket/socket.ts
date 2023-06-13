import expressAsyncHandler from "express-async-handler";

export const connectedUsers = new Map()

export const SocketFucntion = expressAsyncHandler(async(io:any)=>{
    io.on("connection",(socket:any)=>{
        console.log("A user connected:", socket.handshake.query.userId);
        const userId = socket.handshake.query.userId;
        connectedUsers.set(socket.id, {
            userId: userId,
            socket: socket,
          })

          
          socket.on("disconnect", () => {
            console.log(`User: ${socket.handshake.query.userId} disconnected`);
            connectedUsers.delete(socket.id);
          });
        
    })
})