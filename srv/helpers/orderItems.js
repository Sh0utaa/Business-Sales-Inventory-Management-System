function validateOrderItem(item, product, req) {
    if (item.quantity <= 0) {
        return req.reject(
            400,
            'Quantity must be greater than 0'
        );
    }

    if (product.stock < item.quantity) {
        return req.reject(
            400,
            `Not enough stock for ${product.name}`
        );
    }
}

function calculateItemValues(item, product) {
    item.unitPrice = Number(product.price);
    item.subtotal = Number((product.price * item.quantity).toFixed(2));

    item.costPrice = Number(product.costPrice);
    item.costTotal = Number((product.costPrice * item.quantity).toFixed(2));

    return item;
}

export {
    validateOrderItem,
    calculateItemValues
}