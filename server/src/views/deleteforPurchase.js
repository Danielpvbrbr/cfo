
const deleteforPurchase = async (data, connection) => {
    let ids_ = []
    let purchases = data.purchases;

    if(!!purchases.length){
        for (v of purchases) {
            ids_.push(v.id)
        }
    
        ids_str = ids_.join(",")
    
        try {
            const [rows] = await connection.execute(
                `DELETE FROM purchases WHERE id_purchase NOT IN (${ids_str}) AND _email = ?`, [data.email]
            );
    
            console.log(`Foram deletados ${rows.affectedRows} registros de purchases.`);
        } catch (err) {
            console.error("Erro na consulta:", err.message);
            throw err;
        }
    }else{
        try {
            const [rows] = await connection.execute(
                `DELETE FROM purchases WHERE _email = ?`, [data.email]
            );
    
            console.log(`Foram deletados ${rows.affectedRows} registros de purchases.`);
        } catch (err) {
            console.error("Erro na consulta:", err.message);
            throw err;
        }
    }
};


module.exports = deleteforPurchase;
