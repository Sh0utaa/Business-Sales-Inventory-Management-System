function calculateOrderTotal(items) {
    return items.reduce((total, item) => {
        return total + item.subtotal;
    }, 0);
}

function calculateDeliveryFee() {
    return Math.floor(Math.random() * 1001 + 200) / 100;
}

export { calculateOrderTotal, calculateDeliveryFee}