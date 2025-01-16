function calculateTimeDifference() {
    // Pega a data de input
    const targetDateString = "04/07/2024"
    const targetDate = new Date(targetDateString);
    const now = new Date();

    // Calcular a diferença em milissegundos
    const diffMilliseconds = Math.abs(now - targetDate);

    // Converter a diferença em diferentes unidades
    const seconds = Math.floor(diffMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Aproximado
    const years = Math.floor(days / 365.25); // Considerando anos bissextos

    // Exibir o resultado na página
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h1 class="result-title">Desde ${targetDateString}</h1>
        <p class="result-year">${years} anos, ${months % 12} meses, ${days % 30} dias,</p>
        <p class="result-hour">${hours % 24} horas, ${minutes % 60} minutos, ${seconds % 60} segundos.</p>
    `;
}
calculateTimeDifference()
setInterval(calculateTimeDifference, 1000);