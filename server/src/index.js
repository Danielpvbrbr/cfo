require("dotenv").config();
const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const mysql = require("mysql2/promise");
const connectDB = require("./connectDB");

const sendPurchases = require("./views/sendPurchases");
const deleteforPurchase = require("./views/deleteforPurchase");
const timeAlert = require("./views/timeAlert");

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: "*" }));
app.use(express.json()); // ✅ Permite JSON no req.body


const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST"] },
    transports: ["websocket"],
});

app.get("/", (req, res) => {
    res.send("🚀 Server Online...");
});

timeAlert();

io.on("connection", async (socket) => {
    console.log("🔗 Cliente conectado:", socket.id);
    const connection = await connectDB();

    socket.on("bk_purchases", async (data) => {
        // await sendPushNotification(data.pushToken, "title", data.uuid);
        // console.log(data)

        sendPurchases(data, connection);
        deleteforPurchase(data, connection)
    });

    socket.emit("socketId", socket.id);

    socket.on("disconnect", () => {
        console.log("❌ Cliente desconectado:", socket.id);
    });
});

server.listen(5000, () => {
    console.log(`🚀 Servidor rodando em http://locahost:5000`);
});
