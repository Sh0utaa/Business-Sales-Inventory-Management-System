function calculateOrderTotal(items) {
    return Number(
        items.reduce((total, item) => {
            return total + item.subtotal;
        }, 0).toFixed(2)
    );
}

function calculateDeliveryFee(weather) {
    let fee = Math.round(Math.random() * 1000 + 200) / 100;

    if(weather.rain > 0) {
        fee += 2;
    } 

    if (weather.snowfall > 0) {
        fee += 2;
    }

    return fee;
}

export { calculateOrderTotal, calculateDeliveryFee}