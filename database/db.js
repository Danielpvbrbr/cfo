import * as SQLite from 'expo-sqlite';

// Abrir o banco de dados
const db = SQLite.openDatabaseSync('cto_db.db');

// Função para criar a tabela, caso não exista
export const createTable = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS purchases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        numInstallments INTEGER,
        value INTEGER,
        payday INTEGER,
        purchaseDate TEXT,
        paid TEXT,
        installments TEXT
      )
    `);
    console.log('Tabela criada ou já existe');
    getAllPurchases();
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  }
};

// Função para adicionar uma compra
export const addPurchase = async (purchaseName, purchaseValue, numInstallments, dueDay, purchaseDate, installments) => {
  const date = new Date(purchaseDate);
  const formattedDate = date.toLocaleDateString('pt-BR')
  try {
    const result = await db.runAsync(
      `INSERT INTO purchases (title, numInstallments, value, payday, purchaseDate, paid, installments) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        purchaseName,
        Number(numInstallments),
        Number(purchaseValue),
        Number(dueDay),
        formattedDate,
        JSON.stringify([]),
        JSON.stringify(installments)
      ]
    );
    getAllPurchases();
    return result; // Retorna o resultado da inserção
  } catch (error) {
    console.error('Erro ao adicionar compra:', error);
  }
};


// Função para obter todas as compras
export const getAllPurchases = async () => {
  try {
    const purchases = await db.getAllAsync('SELECT * FROM purchases');
    const data = purchases.map(data => ({
      id: data.id,
      numInstallments: data.numInstallments,
      paid: JSON.parse(data.paid),
      payday: data.payday,
      purchaseDate: data.purchaseDate,
      title: data.title,
      value: data.value,
      installments: data.installments,
    }));

    return data;
  } catch (error) {
    console.error('Erro ao buscar compras:', error);
  }
};

// A consulta SQL para atualizar o campo "paid" baseado no "id" da compra
export const updatePaidStatus = async (purchaseId, newPaidStatus) => {
  try {
    const result = await db.runAsync(
      'UPDATE purchases SET paid = ? WHERE id = ?',
      [newPaidStatus, purchaseId]
    );
    if (result.changes > 0) {
      getAllPurchases();
      console.log('Status de pagamento atualizado com sucesso!');
    } else {
      console.log('Nenhuma compra encontrada com esse ID.');
    }
  } catch (error) {
    getAllPurchases();
    console.error('Erro ao atualizar o status de pagamento:', error);
  }
};

// A consulta SQL para deletar o item baseado no "id" da compra
export const deletePurchaseById = async (purchaseId) => {
  try {
    const result = await db.runAsync(
      'DELETE FROM purchases WHERE id = ?',
      [purchaseId]
    );

    if (result.changes > 0) {
      getAllPurchases();
      console.log('Compra removida com sucesso!');
    } else {
      console.log('Nenhuma compra encontrada com esse ID.');
    }
  } catch (error) {
    getAllPurchases();
    console.error('Erro ao remover a compra:', error);
  }
};

// Funcao para remover toda as compras
export const clearDatabase = async () => {
  try {
    await db.runAsync('DELETE FROM purchases');  // Remove todos os registros da tabela 'purchases'
    getAllPurchases()
    console.log('purchases deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao limpar o banco de dados:', error);
  }
};

