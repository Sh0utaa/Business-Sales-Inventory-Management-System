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

export {
    getProduct,
    reduceStock
}