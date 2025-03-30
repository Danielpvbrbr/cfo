import { useState, useEffect, useRef } from 'react'
import { Text, TouchableOpacity, TouchableHighlight, View, ActivityIndicator, Alert, Pressable } from 'react-native';
import css from './styles'
import { formatNumber } from "../funcLocation";
import { useAuth } from "@/context/AuthContext.js";

// Componente Card que representa uma compra parcelada
const Card = ({ dataValue, loading }) => {
  const { deletePurchase, updatePaidStatus, loadPurchasesData } = useAuth();
  const [press, setPress] = useState(false);

  const data = dataValue;

  // Função para exibir um alerta e confirmar exclusão da compra
  const RemoveDebt = () => {
    Alert.alert(
      'Confirmar Exclusão',
      'Deseja realmente deletar esta compra?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: () => {
            deletePurchase(data.id)
          },
        },
      ],
      { cancelable: false }
    );
  };

  const hasOverdue = JSON.parse(data.installments).some(v => {
    // Converte a data da parcela para o formato 'YYYY-MM-DD'
    const installmentDate = new Date(v.split('/').reverse().join('-'));

    // Verifica se a data da parcela é anterior à data atual e se não foi paga
    const isOverdue = installmentDate < new Date() && !JSON.parse(data.paid).includes(v);

    return isOverdue; // Retorna true se encontrar uma parcela vencida
  });

  // Função para atualizar o status de pagamento de uma parcela
  const updatePaid = (id, date) => {
    let datesArray = [...JSON.parse(data.paid)];  // Mantém a imutabilidade do estado
    datesArray.push(date);
    let updatedDate = JSON.stringify(datesArray);
    updatePaidStatus(id, updatedDate);
    loadPurchasesData();
  }

  return (
    <TouchableOpacity
      onPress={() => setPress(!press)}
      onLongPress={() => RemoveDebt()}
      style={[css.container, { borderLeftColor: '#1B61BC' }]}
    >
      <View style={css.line} >

        {/* Exibe o título e o valor da parcela */}
        <Text style={[css.title, { fontSize: 21, color: '#1B61BC', fontWeight: 800 }]}>
          {dataValue.title}
        </Text>

        <Text style={[css.subtitle, { fontSize: 19, color: '#012554', fontWeight: 800 }]}> R${formatNumber(data.value / data.numInstallments)} </Text>
      </View>

      {/* Informações da compra */}
      <View style={css.line}><Text style={css.title}>Parcelas:</Text><Text style={css.subtitle}>{data.numInstallments}</Text></View>
      <View style={css.line}><Text style={css.title}>Parc pagas:</Text><Text style={css.subtitle}>{JSON.parse(data.paid).length}</Text></View>
      <View style={css.line}><Text style={css.title}>Parc Restante:</Text><Text style={css.subtitle}>{data.numInstallments - JSON.parse(data.paid).length}</Text></View>
      <View style={css.line}><Text style={css.title}>Valor da compra:</Text><Text style={css.subtitle}>{data.value}</Text></View>
      <View style={css.line}><Text style={css.title}>Total Restante:</Text><Text style={css.subtitle}>{data.value - (data.numInstallments * JSON.parse(data.paid).length)}</Text></View>
      <View style={css.line}><Text style={css.title}>Data de Compra:</Text><Text style={css.subtitle}>{data.purchaseDate}</Text></View>

      {/* Exibe se há parcelas vencidas */}
      <View style={css.line}>
        <Text style={[css.title, { color: hasOverdue ? "#FF6B6B" : "#1B61BC" }]}>Vencimento:</Text>
        <Text style={[css.subtitle, { color: hasOverdue ? "#FF6B6B" : "#1B61BC" }]}>Todo dia {data.payday}</Text>
      </View>

      {loading && <ActivityIndicator size="large" color="#1B61BC" />}

      {/* Se pressionado, exibe a lista de parcelas */}
      {press && (
        <TouchableHighlight style={css.area}>
          <View>
            {
              JSON.parse(data.installments).map((dateArray, i) => {
                // Verifica se o item foi pago
                const isPaid = JSON.parse(data.paid).includes(dateArray);

                // Verifica se a data da parcela está vencida
                const isOverdue = new Date(dateArray.split('/').reverse().join('-')) < new Date();

                return (
                  <Pressable
                    onPress={() => alert("Pago dia 08/92/2998")}
                    style={[
                      css.installments,
                      {
                        backgroundColor: isPaid ? "#fff" : isOverdue ? "#F8D1D1" : "#fff"
                      }
                    ]}
                    key={i}
                  >
                    <Text style={css.cnt}>
                      {i + 1}° R${formatNumber(data.value / data.numInstallments)}
                    </Text>
                    <Text
                      style={[
                        css.cnt,
                        {
                          fontSize: 15,
                          textAlign: "right",
                          color: isPaid ? "#1B61BC" : isOverdue ? "#FF6B6B" : "#1B61BC"
                        }
                      ]}
                    >
                      {dateArray}
                    </Text>
                    <TouchableOpacity
                      style={[
                        css.btn,
                        {
                          backgroundColor: isPaid ? "#D2E4FC" : isOverdue ? "#FF6B6B" : "#1B61BC"
                        }
                      ]}
                      onPress={() => updatePaid(data.id, dateArray)}
                      disabled={isPaid}
                    >
                      <Text style={css.btntext}>{isPaid ? "Pago" : "Pagar"}</Text>
                    </TouchableOpacity>
                  </Pressable>
                );
              })
            }
          </View>
        </TouchableHighlight>
      )}
    </TouchableOpacity>
  );
}

export default Card;
