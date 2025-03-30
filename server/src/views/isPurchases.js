const isUser = async (connection, id_purchase) => {
    try {
        // Executa a consulta para verificar se o usuário existe
        const [rows, fields] = await connection.execute("SELECT * FROM purchases WHERE id_purchase=?", [id_purchase]);

        if (rows.length === 0) {
            return null;
        } else {
            return rows[0];
        }
    } catch (err) {
        console.error("Erro na consulta:", err.message);
        throw err; 
    }
};

module.exports = isUser;
