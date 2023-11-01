document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('nonConformanceForm');
  const table = document.getElementById('nonConformanceTable');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtenha os valores do formulário
    const area = document.getElementById('area').value;
    const descricao = document.getElementById('descricao').value;
    const resultado = document.getElementById('resultado').value;
    const responsavel = document.getElementById('responsavel').value;
    const ocorreu = document.getElementById('ocorreu').checked;
    const observacoes = document.getElementById('observacoes').value;
    const data_envio = document.getElementById('data_envio').value;
    const classificacao = document.getElementById('classificacao').value;
    const acao_corretiva = document.getElementById('acao_corretiva').value;

    // Adicione os valores à tabela
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);

    cell1.innerHTML = area;
    cell2.innerHTML = descricao;
    cell3.innerHTML = resultado;
    cell4.innerHTML = responsavel;
    cell5.innerHTML = ocorreu ? 'Sim' : 'Não';
    cell6.innerHTML = observacoes;
    cell7.innerHTML = data_envio;
    cell8.innerHTML = classificacao;
    cell9.innerHTML = acao_corretiva;

    // Limpe o formulário
    form.reset();
  });
});
