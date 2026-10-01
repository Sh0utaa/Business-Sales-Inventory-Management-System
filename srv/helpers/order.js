function calculateOrderTotal(items) {
    return Number(
        items.reduce((total, item) => {
            return total + item.subtotal;
        }, 0).toFixed(2)
    );
}

function calculateDeliveryFee() {
    return Math.round(Math.random() * 1000 + 200) / 100;
}

export { calculateOrderTotal, calculateDeliveryFee}