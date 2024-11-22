// Referência aos elementos do formulário e do botão
const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitBtn');
const errorAlert = document.getElementById('errorAlert');

// Função para exibir o alerta de erro
function showErrorAlert() {
  errorAlert.style.display = 'block'; // Torna o alerta visível
}

// Função para esconder o alerta de erro
function hideErrorAlert() {
  errorAlert.style.display = 'none'; // Torna o alerta invisível
}

// Adiciona um evento para verificar se os campos estão sendo preenchidos
form.addEventListener('input', function () {
  // Se todos os campos estiverem preenchidos corretamente, esconde a mensagem de erro
  if (form.checkValidity()) {
    hideErrorAlert();
  }
});

// Quando o formulário for enviado, verifica se os campos obrigatórios estão preenchidos
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário para realizar a validação manual

  if (!form.checkValidity()) {
    showErrorAlert(); // Exibe o alerta se o formulário não for válido
  } else {
    // Se o formulário for válido, exibe uma mensagem de sucesso (simulado)
    alert('Formulário enviado com sucesso!');
    form.reset(); // Limpa o formulário
    submitButton.disabled = true; // Desabilita o botão de envio novamente
    hideErrorAlert(); // Esconde o alerta de erro, se necessário
  }
});

// Chama a função de validação inicial para garantir que o botão comece desabilitado
submitButton.disabled = true;

// Verifica a validade do formulário enquanto o usuário digita
form.addEventListener('input', function () {
  submitButton.disabled = !form.checkValidity(); // Habilita o botão somente se o formulário for válido
});