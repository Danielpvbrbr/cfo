import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export const getPermissionsAsync = async () => {

    if (!Device.isDevice) {
        Alert.alert("Erro", "Notificações só funcionam em dispositivos físicos.");
        return null;
    }

    // Verifica permissões
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }

    if (finalStatus !== 'granted') {
        Alert.alert("Erro", "Permissão para notificações negada!");
        return null;
    }

    try {

        const [storedId, pushToken] = await Promise.all([
            AsyncStorage.getItem("deviceUUID"),
            Notifications.getExpoPushTokenAsync(),
        ]);
console.log(uniqueId)
        let uniqueId = storedId;
        const token = pushToken.data;

        if (!uniqueId) {
            uniqueId = Device.osInternalBuildId;
            await AsyncStorage.setItem("deviceUUID", uniqueId);
        }

        await AsyncStorage.setItem("pushToken", token);

     
    } catch (error) {
        console.error("Erro ao obter token ou UUID:", error);
    }


};

