function calculateTimeDifference() {
    const targetDateString = "07/04/2024";
    
    const targetDateParts = targetDateString.split("/");
    const targetDate = new Date(targetDateParts[2], targetDateParts[1] - 1, targetDateParts[0]);

    const now = new Date();

    const diffMilliseconds = Math.abs(now - targetDate);

    const seconds = Math.floor(diffMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h1 class="result-title">Desde ${targetDateString}</h1>
        <p class="result-year">${years} anos, ${months % 12} meses, ${days % 30} dias,</p>
        <p class="result-hour">${hours % 24} horas, ${minutes % 60} minutos, ${seconds % 60} segundos.</p>
    `;
}

calculateTimeDifference();
setInterval(calculateTimeDifference, 1000);
