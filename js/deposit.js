// step 1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2
    const depositFiled = document.getElementById('deposit-field');
    const newDepositValueString = depositFiled.value;
    const newDepositValue = parseFloat(newDepositValueString);
    
    // step 3
    depositFiled.value = '';
    // step 4
    const depositValue = document.getElementById('deposit-amount');
    const previousDepositAmountString = depositValue.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    // step 5
    const newDepositAmount = previousDepositAmount + newDepositValue;
    depositValue.innerText = newDepositAmount ;

    // step 6
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmountString = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    // step 7
    const balanceTotalAmount = balanceAmount + newDepositValue;
    balanceTotal.innerText = balanceTotalAmount;

})