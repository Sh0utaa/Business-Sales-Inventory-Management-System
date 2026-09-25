namespace business.system;

using { cuid, managed } from '@sap/cds/common';

entity Employee : managed {
    key ID  : UUID @readonly;
    name    : String;
    role    : EmployeeRole @assert.range;
}

entity Customer : managed {
    key ID  : UUID @readonly;
    name    : String;
    phone   : String;
    address : String;
}

type EmployeeRole : String enum {
    Delivery; Manager; Admin
}

entity Product : cuid, managed {
    name        : String;
    stock       : Integer;
    price       : Decimal;
    lastStocked : DateTime;
}

entity Order : managed {
    key ID  : UUID @readonly;
    customer    : Association to Customer not null;
    deliverer   : Association to Employee;

    @readonly orderDate   : DateTime @cds.on.insert: $now;
    @readonly status      : OrderStatus default 'Pending' @assert.range;
    @readonly total      : Decimal;

    deliveryFee : Decimal;
    items       : Composition of many OrderItem on items.order = $self;
}

type OrderStatus : String enum {
    Delivered; Delivering; Pending
}

entity OrderItem : cuid, managed {
    order       : Association to Order;
    product     : Association to Product not null; 
    quantity    : Integer not null;

    @readonly unitPrice   : Decimal;
    @readonly subtotal    : Decimal;
}

entity Expense : cuid {
    description : String;
    amount      : Decimal;
    date        : DateTime;
    category    : ExpenseCategory;
}

type ExpenseCategory : String enum {
    Delivery;
    Packaging;
    Production;
    Other;
}