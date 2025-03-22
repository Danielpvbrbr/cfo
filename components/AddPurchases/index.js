import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Modal, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import css from './styles';
import { Picker } from '@react-native-picker/picker';
import { useAuth } from "@/context/AuthContext.js";
import { gerInstallments } from '../funcLocation';

export default function AddPurchases({ modalVisible, setModalVisible }) {
  const { addPurchase, loadPurchasesData, clearDatabase } = useAuth();
  const [purchaseName, setPurchaseName] = useState('');
  const [purchaseValue, setPurchaseValue] = useState('');
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [numInstallments, setNumInstallments] = useState('');
  const [dueDay, setDueDay] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddPurchase = async () => {

    if (!purchaseName || !purchaseValue || !numInstallments || !dueDay) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios');
      return;
    }

    try {
      const result = await addPurchase(
        purchaseName,
        purchaseValue,
        numInstallments,
        dueDay,
        purchaseDate,
        gerInstallments({
          purchaseDate: purchaseDate,
          installments: numInstallments,
          dueDay: dueDay
        })
      );

      if (result && result.changes > 0) {
        Alert.alert('Sucesso', 'Compra adicionada com sucesso!');
        setModalVisible(false);
        resetForm();
        loadPurchasesData();
      }
    } catch (error) {
      console.error('Erro ao adicionar compra:', error);
      Alert.alert('Erro', 'Não foi possível adicionar a compra.');
    }

  };

  const resetForm = () => {
    setPurchaseName('');
    setPurchaseValue('');
    setNumInstallments('');
    setDueDay('');
    setPurchaseDate(new Date());
  };

  const handleDateConfirm = (date) => {
    setPurchaseDate(date);
    setShowDatePicker(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={css.modalContainer}>
        <Pressable style={css.modalCloseArea} onPress={() => setModalVisible(false)} />
        <Text style={css.title}>Adicionar Compras</Text>
        <View style={css.modalContent}>
          <Text style={css.label}>Nome da Compra</Text>
          <TextInput
            style={css.input}
            placeholder="Ex: Geladeira"
            value={purchaseName}
            onChangeText={setPurchaseName}
          />

          <Text style={css.label}>Valor da Compra</Text>
          <TextInput
            style={css.input}
            placeholder="R$ 1500,00"
            keyboardType="numeric"
            value={purchaseValue}
            onChangeText={setPurchaseValue}
          />

          <Text style={css.label}>Data da Compra</Text>
          <View style={css.inputArea}>
            <Pressable onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={css.inputDate}
                placeholder="Selecione a data"
                value={purchaseDate.toLocaleDateString()}
                editable={false}
              />
            </Pressable>
          </View>

          <DateTimePickerModal
            isVisible={showDatePicker}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={() => setShowDatePicker(false)}
          />

          <Text style={css.label}>Parcelas</Text>
          <TextInput
            style={css.inputShort}
            placeholder="Ex: 12"
            keyboardType="numeric"
            maxLength={3}
            value={numInstallments}
            onChangeText={setNumInstallments}
          />

          <Text style={css.label}>Vencimento</Text>
          <Picker
            selectedValue={dueDay}
            style={css.select}
            onValueChange={(itemValue) => setDueDay(itemValue)}
          >
            {Array.from({ length: 28 }, (_, index) => (
              <Picker.Item key={index} label={`Todo dia ${index + 1}`} value={`${index + 1}`} />
            ))}
          </Picker>

          <Pressable style={css.addButton} onPress={handleAddPurchase}>
            <Text style={css.addButtonText}>Adicionar Compra</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
