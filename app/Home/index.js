import { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, Animated, StyleSheet, Text, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import css from './styles';
import HeaderMenu from '@/components/HeaderMenu';
import AddPurchases from '@/components/AddPurchases';
import Card from '@/components/Card';
import Search from '@/components/Search';
import { useAuth } from "@/context/AuthContext.js";

export default function Home({ modalVisible, setModalVisible }) {
  const { purchases, sendOverdueNotification } = useAuth();
  const [loading, setLoading] = useState(false);
  const fadeAnim = useState(new Animated.Value(1))[0];
  const [activeTab, setActiveTab] = useState(1);
  const [overduePurchases, setOverduePurchases] = useState([]);
  const [inDaysPurchases, setInDaysPurchases] = useState([]);
  const [paidPurchases, setPaidPurchases] = useState([]);
  const [search, setSearch] = useState("");
  const [qtd, setQtd] = useState(0);


  const classifyPurchases = () => {
    setPaidPurchases([]);
    const overdue = [];
    const inDays = [];
    const paid = [];

    purchases.forEach(purchase => {
      let isAlreadyAdded = false;

      JSON.parse(purchase.installments).forEach(installment => {
        const isPaid = purchase.numInstallments === purchase.paid.length;
        const installmentDate = new Date(installment.split('/').reverse().join('-'));
        const isOverdue = installmentDate < new Date();
        const isInstallmentPaid = purchase.paid.includes(installment);

        if (!isAlreadyAdded) {
          if (isPaid) {
            paid.push(purchase);
          } else if (isOverdue && !isInstallmentPaid) {
            inDays.push(purchase);
            setQtd(inDays.length);
          } else {
            overdue.push(purchase);
          }
          isAlreadyAdded = true;
        }
      });
    });
    
    setOverduePurchases(overdue);
    setInDaysPurchases(inDays);
    setPaidPurchases(paid);
  };

  // Função para verificar se existem contas vencidas e enviar notificações
  const checkAndNotifyOverduePurchases = () => {
    overduePurchases.forEach((purchase) => {
      JSON.parse(purchase.installments).forEach((installment) => {
        const installmentDate = new Date(installment.split('/').reverse().join('-'));
        const title = purchase.title;
        const dueDate = installmentDate.toLocaleDateString();

        // Verifica se a parcela está vencida e não foi paga
        if (installmentDate < new Date() && !purchase.paid.includes(installment)) {
          sendOverdueNotification(title, dueDate); // Passa título e data de vencimento
        }
      });
    });
  };

  useEffect(() => {
    setLoading(true);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        setLoading(false);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, 1500);
    });

    classifyPurchases(); // Classificar as compras
    checkAndNotifyOverduePurchases(); // Verificar e enviar notificação para as compras vencidas
  }, [purchases]);

  // Filtra compras de acordo com o nome digitado
  const filterPurchases = (purchases) => {
    return purchases.filter(purchase =>
      purchase.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  // Retorna compras filtradas de acordo com a aba ativa
  const renderPurchases = () => {
    if (activeTab === 1) {
      return filterPurchases(overduePurchases);
    } else if (activeTab === 2) {
      return filterPurchases(inDaysPurchases);
    } else if (activeTab === 3) {
      return filterPurchases(paidPurchases);
    }
    return [];
  };

  const filteredPurchases = renderPurchases();

  return (
    <View style={css.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#7EB3FA" />
      <HeaderMenu active={activeTab} setActive={setActiveTab} qtd={qtd} />

      {/* Campo de busca */}
      <Search search={search} setSearch={setSearch} />
      {/* <Button title="Testar Notificação" onPress={sendOverdueNotification} /> */}
      {loading ? (
        <View style={css.loadingContainer}>
          <LottieView
            source={require('@/assets/loading.json')}
            autoPlay
            loop
            style={css.loadingAnimation}
          />
        </View>
      ) : (
        <Animated.View style={[css.area, { opacity: fadeAnim }]}>
          <ScrollView>
            {filteredPurchases.length > 0 ? (
              filteredPurchases.map((purchase, index) => (
                <Card key={`${purchase.title}-${index}`} dataValue={purchase} loading={loading} />
              ))
            ) : (
              search &&
              <>
                <LottieView
                  source={require('@/assets/notfoud.json')}
                  autoPlay
                  loop
                  style={styles.notFoundAnimation} 
                />
                <Text style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#32A7E1"
                }} >Ops, Não encontrei nada</Text>
              </>
            )}
          </ScrollView>
        </Animated.View>
      )}

      <AddPurchases
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

// Estilo para centralizar a animação Lottie
const styles = StyleSheet.create({
  notFoundAnimation: {
    width: 100,
    height: 140,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
