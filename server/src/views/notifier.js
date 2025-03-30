const { Expo } = require("expo-server-sdk");

const expo = new Expo();

const sendPushNotification = async (token, title, message) => {
    console.log(token, title, message)
    if (!Expo.isExpoPushToken(token)) {
        console.error("Token inválido:", token);
        return;
    }
    
    const messages = [
        {
            to: token,
            sound: "default",
            title: title,
            body: message,
            data: { extraData: "Alguma informação extra" },
        },
    ];

    try {
        const response = await expo.sendPushNotificationsAsync(messages);
        console.log("Resposta da notificação:", response);
    } catch (error) {
        console.error("Erro ao enviar notificação:", error);
    }
}
module.exports = sendPushNotification;

