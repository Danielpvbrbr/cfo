import io from "socket.io-client";
const socket = io("http://192.168.100.19:5000", { transports: ["websocket"] });

socket.on("connect", () => {
    console.log("✅ Conectado ao Socket.io:", socket.id);
});

socket.on("disconnect", () => {
    console.log("❌ Desconectado do Socket.io");
});

export default socket;