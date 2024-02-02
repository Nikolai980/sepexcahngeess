function exchange() {
    const exchangeRate = 0.02;
    const inputAmount = document.getElementById('inputAmount').value;
    const result = inputAmount * exchangeRate;

    document.getElementById('result').textContent = `Rezlatat: ${inputAmount} Ƨ🜚 = ${result.toFixed(2)} €`;
}
