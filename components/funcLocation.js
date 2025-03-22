
// export const gerInstallments = (base) => {
//   let dates = [];
//   let [dia, mes, ano] = base.purchaseDate.split('/');
//   let date = new Date(`${ano}-${mes}-${base.payday + 1}`);

//   for (let i = 0; i < base.installments; i++) {
//     dates.push(new Date(date));
//     date.setMonth(date.getMonth() + 1);
//   }

//   return dates.map(d => d.toLocaleDateString('pt-BR'));
// }

// Função para formatar números para moeda brasileira
export const formatNumber = (numero) => {
  return Number(numero).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const gerInstallments = (base) => {
  const dateFormat = new Date(base.purchaseDate);
  const formattedDate = dateFormat.toLocaleDateString('pt-BR')

  const [dia, mes, ano] = formattedDate.split('/');
  let date = new Date(ano, mes - 1, base.dueDay);  // Criando a data manualmente, mês começa de 0
  const dates = [];

  // Gerar as datas com base na quantidade de parcelas
  for (let i = 0; i < base.installments; i++) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    dates.push(`${day}/${month}/${year}`); // Adiciona data no formato 'dd/mm/yyyy'
    date.setMonth(date.getMonth() + 1); // Incrementa o mês para a próxima parcela
  }

  return dates;
}