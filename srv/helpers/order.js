function calculateOrderTotal(items) {
    return items.reduce((total, item) => {
        return total + item.subtotal;
    }, 0);
}

function calculateDeliveryFee() {
    let deliveryFee = Math.floor(Math.random() * 1001 + 200) / 100;
    return deliveryFee.toFixed(2);
}

export { calculateOrderTotal, calculateDeliveryFee}