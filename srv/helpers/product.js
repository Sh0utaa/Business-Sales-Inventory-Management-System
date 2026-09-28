
async function getProduct(productID) {
    return SELECT.one
        .from('Product')
        .where({ ID: productID });
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