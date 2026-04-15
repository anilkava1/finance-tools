function renderSIP() {
    const monthly = parseFloat(document.getElementById('sipAmount').value);
    const stepUp = parseFloat(document.getElementById('sipStep').value) / 100;
    const rate = parseFloat(document.getElementById('sipRate').value) / 100 / 12;
    const years = parseInt(document.getElementById('sipYears').value);

    let totalInvested = 0; let maturityValue = 0; let currentSIP = monthly;

    for (let i = 1; i <= years; i++) {
        for (let j = 1; j <= 12; j++) {
            totalInvested += currentSIP;
            maturityValue = (maturityValue + currentSIP) * (1 + rate);
        }
        currentSIP += (currentSIP * stepUp);
    }
    document.getElementById('sipTotal').innerText = '₹' + Math.round(maturityValue).toLocaleString();
}