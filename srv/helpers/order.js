function calculateOrderTotal(items) {
    return Number(
        items.reduce((total, item) => {
            return total + item.subtotal;
        }, 0).toFixed(2)
    );
}

function calculateOrderCost(items) {
    return Number(
        items.reduce((total, item) => {
            return total + item.costTotal;
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

function randomDelay() {
    return Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000;
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processDelivery(orderID) {

    await wait(randomDelay());

    await UPDATE('Order')
        .set({ status: 'Delivering' })
        .where({ ID: orderID });


    await wait(randomDelay());

    await UPDATE('Order')
        .set({ status: 'Completed' })
        .where({ ID: orderID });
}

export { calculateOrderTotal, calculateDeliveryFee, processDelivery, calculateOrderCost }