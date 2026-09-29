import { SELECT, UPDATE } from '@sap/cds/lib/ql/cds-ql.js';

async function getProduct(productID) {
    const product = await SELECT.one
        .from('Product')
        .where({ ID: productID });

    return product;
}

async function reduceStock(product, quantity) {
    await UPDATE('Product')
        .set({
            stock: product.stock - quantity
        })
        .where({ ID: product.ID });
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

export {
    getProduct,
    reduceStock,
    processDelivery
}