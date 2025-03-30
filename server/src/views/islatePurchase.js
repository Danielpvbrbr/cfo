const connectDB = require("../connectDB");
const sendPushNotification = require("./notifier");

const formateDate = (data) => {
    const [day, month, year] = data.split('/');
    return new Date(`${year}-${month}-${day}`);
};

const dateNew = new Date();


const islatePurchase = async () => {
    const connection = await connectDB();
    try {
        const [rows] = await connection.execute("SELECT * FROM purchases");

        if (rows.length === 0) {
            return null;
        } else {
            for (v of rows) {
                const installmentsArray = JSON.parse(v.installments);
                const paidInstallments = JSON.parse(v.paid);

                const overdueInstallments = installmentsArray.filter(installment => formateDate(installment) < dateNew);
                const overdueExcludingPaid = overdueInstallments.filter(overdue => !paidInstallments.includes(overdue));

                const overdueNow = overdueExcludingPaid.length < 2 && formateDate(overdueExcludingPaid[0]) === dateNew;

                const dataNotfy = (
                    {
                        title: `Eii! ${v.title} esta em Atraso`,
                        message: `${overdueExcludingPaid.length > 1 ?
                            "Parcela vencida nos dias" : (overdueNow ? "Sua conta vence hoje"
                                :
                                "Conta vencida no dia")} ${overdueNow ? overdueNow : overdueExcludingPaid.join(" e ")}`,
                        pushToken: v.pushToken
                    }
                )

                sendPushNotification(dataNotfy.pushToken, dataNotfy.title, dataNotfy.message)
            }
        }
    } catch (err) {
        console.error("Erro na consulta:", err.message);
        throw err;
    }
};


module.exports = islatePurchase;
