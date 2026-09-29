function calculateOrderTotal(items) {
    return items.reduce((total, item) => {
        return total + item.subtotal;
    }, 0);
}

function calculateDeliveryFee() {
    return Math.round(Math.random() * 1000 + 200) / 100;
}

export { calculateOrderTotal, calculateDeliveryFee}