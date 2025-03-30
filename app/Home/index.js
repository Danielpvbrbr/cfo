import { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, Animated, StyleSheet, Text, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import css from './styles';
import HeaderMenu from '@/components/HeaderMenu';
import AddPurchases from '@/components/AddPurchases';
import Card from '@/components/Card';
import Search from '@/components/Search';
import { useAuth } from "@/context/AuthContext.js";

export default function Home() {
  const { purchases, modalVisible, setModalVisible } = useAuth();
  const [loading, setLoading] = useState(false);
  const fadeAnim = useState(new Animated.Value(1))[0];
  const [activeTab, setActiveTab] = useState(1);
  const [overduePurchases, setOverduePurchases] = useState([]);
  const [inDaysPurchases, setInDaysPurchases] = useState([]);
  const [paidPurchases, setPaidPurchases] = useState([]);
  const [search, setSearch] = useState("");
  const [lengthPurchases, setLengthPurchases] = useState(0);


  const formateDate = (data) => {
    const [day, month, year] = data.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const classifyPurchases = () => {
    setPaidPurchases([]);
    const overdue = [];
    const inDays = [];
    const paid = [];

    purchases.forEach(data => {
      let isAlreadyAdded = false;
      const installments = JSON.parse(data.installments)
      const paid = JSON.parse(data.paid)
      const isPaid = data.numInstallments === data.paid.length;

      const unpaidOverdue = installments.filter(
        (el) => !paid.includes(el) //retira as pagas
      );

      const delay = unpaidOverdue.filter(
        (el) => formateDate(el) < new Date() //mostra as em atraso
      );

      const onTime = installments.filter(
        (el) =>
          !paid.includes(el) && (formateDate(el) < new Date()) //retira as pagas e restira as vencidas
      );

      if (!isAlreadyAdded) {
        if (!Boolean(onTime.length)) {
          inDays.push(data);
        } else if (delay.length) {
          overdue.push(data);
        } else if (isPaid) {
          paid.push(data);
        }
        isAlreadyAdded = true;
      }
    });
    setInDaysPurchases(inDays);
    setOverduePurchases(overdue);
    setPaidPurchases(paid);
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
      return filterPurchases(inDaysPurchases);
    } else if (activeTab === 2) {
      return filterPurchases(overduePurchases);
    } else if (activeTab === 3) {
      return filterPurchases(paidPurchases);
    }
    return [];
  };

  const filteredPurchases = renderPurchases();

  useEffect(() => {
    setLengthPurchases(overduePurchases.length);
  }, [inDaysPurchases]);

  return (
    <View style={css.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#7EB3FA" />
      <HeaderMenu
        active={activeTab}
        setActive={setActiveTab}
        lengthPurchases={[inDaysPurchases.length, overduePurchases.length, paidPurchases.length]}
      />

      <Search
        search={search}
        setSearch={setSearch}
      />

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
