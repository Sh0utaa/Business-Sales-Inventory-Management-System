namespace business.system;

using { cuid } from '@sap/cds/common';

entity Employee : cuid {
    name    : String not null;
    role    : EmployeeRole not null;
}

entity Customer : cuid {
    name    : String not null;
    phone   : String not null;
    address : String not null;
}

type EmployeeRole : String enum {
    Delivery;
    Manager;
    Admin;
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
    Delivered;
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
    description : String;
    amount      : Decimal;
    date        : DateTime;
    category    : ExpenseCategory @assert.range;
}

type ExpenseCategory : String enum {
    Delivery;
    Packaging;
    Production;
    Other;
}