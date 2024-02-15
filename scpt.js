
function predictBitcoin() {
    const predictionDays = document.getElementById('predictionDays').value;
    const predictionResult = document.getElementById('predictionResult');

    // Simulated prediction logic (replace with your algorithm)
    const predictedPrice = Math.random() * 10000 + 30000; // Example: Random value between $30,000 and $40,000

    predictionResult.innerHTML = `Predicted price for the next ${predictionDays} days: $${predictedPrice.toFixed(2)}`;
}
