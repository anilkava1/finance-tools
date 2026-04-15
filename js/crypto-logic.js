function calculateCryptoTax() {
    // User se direct profit ka input lena
    const userProfit = parseFloat(document.getElementById('userProfitInput').value) || 0;

    if (userProfit <= 0) {
        alert("Please enter a profit amount greater than 0");
        return;
    }

    // India Tax Rules Calculation
    const tax30 = userProfit * 0.30; // 30% Flat Tax
    const tds1 = userProfit * 0.01;  // 1% TDS (Simplified for profit amount)
    
    // Final Amount calculation
    const netTakeHome = userProfit - tax30 - tds1;

    // UI par results dikhana
    document.getElementById('displayProfit').innerText = '₹' + userProfit.toLocaleString();
    document.getElementById('taxAmount').innerText = '₹' + tax30.toLocaleString();
    document.getElementById('tdsAmount').innerText = '₹' + tds1.toLocaleString();
    document.getElementById('netProfit').innerText = '₹' + (netTakeHome > 0 ? Math.round(netTakeHome).toLocaleString() : 0);
}