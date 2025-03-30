const isUser = async (connection, email) => {
    try {
        // Executa a consulta para verificar se o usuário existe
        const [rows, fields] = await connection.execute("SELECT * FROM user WHERE email=?", [email]);

        if (rows.length === 0) {
            return null; 
        } else {
            return rows[0]; 
        }
    } catch (err) {
        console.error("Erro na consulta:", err.message);
        throw err; // Lança erro para ser tratado externamente
    }
};

module.exports = isUser;
