const mysql = require("mysql2/promise"); // Assumindo que você está usando o mysql2 com Promise
let dbConnection;

const connectDB = async () => {
    if (!dbConnection) {  // Verifica se a conexão já está estabelecida
        try {
            dbConnection = await mysql.createConnection({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                database: process.env.MYSQL_DATABASE,
                port: process.env.MYSQL_PORT,
                password: process.env.MYSQL_PASSWORD,
            });
            console.log("✅ Conectado ao MySQL!");
        } catch (err) {
            console.error("❌ Erro ao conectar ao MySQL:", err.message);
            throw err; // Lança erro para ser tratado externamente
        }
    }
    return dbConnection; // Retorna a conexão existente ou recém-criada
};

module.exports = connectDB;
