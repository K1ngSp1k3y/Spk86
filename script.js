document.addEventListener('DOMContentLoaded', () => {
    const confirmCheckoutBtn = document.getElementById('confirm-secure-checkout');
    if (confirmCheckoutBtn) {
        confirmCheckoutBtn.addEventListener('click', () => {
            const depositInput = document.getElementById('checkout-deposit-amount');
            const depositVal = parseFloat(depositInput.value);
            
            if (isNaN(depositVal) || depositVal <= 0) {
                alert('Invalid deposit amount. Please enter a valid sum to proceed.');
                return;
            }
            
            processSecureCheckoutWithDeposit(depositVal);
        });
    }

    window.maskCardNumber = function(fullNumber) {
        if (!fullNumber || fullNumber.length < 4) return "**** **** **** 0000";
        const last4 = fullNumber.slice(-4);
        return `**** **** **** ${last4}`;
    };

    window.checkGiftCardBalance = function(cardCode) {
        const cardData = userPersistentStorage.getCard(cardCode);
        if (!cardData || cardData.balance <= 0) {
            return "Card has no money try a new one";
        }
        return `$${cardData.balance.toFixed(2)}`;
    };
});
