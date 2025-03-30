const isUser = require("./isUser");
const isPurchases = require("./isPurchases");

const sendPurchases = async (data, connection) => {
    let purchases = data.purchases;

    // Verifica se o usuário existe
    const user = await isUser(connection, data.email);

    if (!user) {
        console.log("Usuário não encontrado.");
        return;
    }

    try {
        for (let v of purchases) {
            const purchaseExists = await isPurchases(connection, v.id);

            if (purchaseExists) {
                // console.log("Compra já existe, pulando:", v.id);
                continue;
            }

            const [rows] = await connection.execute(
                `INSERT INTO purchases (title, numInstallments, value, payday, purchaseDate, paid, installments, id_purchase, _email, pushToken) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    v.title,
                    v.numInstallments,
                    v.value,
                    v.payday,
                    v.purchaseDate,
                    v.paid,
                    v.installments,
                    v.id,
                    data.email,
                    data.pushToken
                ]
            );

            if (rows.affectedRows === 0) {
                console.log("Erro ao salvar compra:", v.id);
                await connection.rollback(); // Reverte a transação se algo der errado
                return;
            }

        }
        await connection.commit();
        console.log("Compras salvas com sucesso!");

    } catch (err) {
        // Se ocorrer erro, faz rollback da transação
        console.error("Erro ao salvar compras:", err.message);
        await connection.rollback();
    }
};

module.exports = sendPurchases;
