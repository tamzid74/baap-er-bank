// step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountValueString = withdrawField.value;
    const withdrawAmountValue = parseFloat(withdrawAmountValueString);

    // step 3
    withdrawField.value ='';
    // step 4
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const withdrawAmountTotal = parseFloat(withdrawAmountString);
    // step 5
    const withdraw = withdrawAmountTotal + withdrawAmountValue;
    withdrawAmount.innerText = withdraw;

    // step 7
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);
    // step 8
    const remainingBalance = balanceTotalAmount - withdrawAmountValue;
    balanceTotal.innerText = remainingBalance;

})