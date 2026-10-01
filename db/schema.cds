namespace business.system;

using { cuid } from '@sap/cds/common';

entity Employee : cuid {
    userID: String;
    name    : String not null;
}

entity Customer : cuid {
    userID: String;
    name    : String not null;
    phone   : String not null;
    address : String not null;
}

entity Product : cuid {
    name  : String not null;
    stock : Integer not null;
    price : Decimal not null;
}

entity Order {
    key ID      : UUID @readonly;
    customer    : Association to Customer @assert.target not null;
    deliverer   : Association to Employee @assert.target;

    @readonly orderDate : DateTime @cds.on.insert: $now;
    @readonly status    : OrderStatus default 'Pending' @assert.range;
    @readonly total     : Decimal;

    deliveryFee : Decimal;
    items       : Composition of many OrderItem on items.order = $self;
}

type OrderStatus : String enum {
    Completed;
    Delivering;
    Pending;
}

entity OrderItem : cuid {
    order       : Association to Order;
    product     : Association to Product @assert.target not null;
    quantity    : Integer not null;

    @readonly unitPrice : Decimal;
    @readonly subtotal  : Decimal;
}

entity Expense : cuid {
    description : String not null;
    amount      : Decimal(10,2) not null;
    date        : DateTime default $now;
    category    : ExpenseCategory @assert.range;
}

type ExpenseCategory : String enum {
    Delivery;
    Packaging;
    Production;
    Other;
}