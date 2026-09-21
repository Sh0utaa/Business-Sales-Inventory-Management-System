namespace business.system;

using { cuid, managed } from '@sap/cds/common';

entity Employee : cuid, managed {
    name    : String;
    role    : EmployeeRole;
}

entity Customer : cuid, managed {
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

entity Order : cuid, managed {
    customer    : Association to Customer;
    deliverer   : Association to Employee;
    orderDate   : DateTime;
    status      : OrderStatus;
    deliveryFee : Decimal;
    total       : Decimal;

    items       : Composition of many OrderItem on items.order = $self;
}

type OrderStatus : String enum {
    Delivered; Delivering; Pending
}

entity OrderItem : cuid {
    order       : Association to Order;
    product     : Association to Product; 
    quantity    : Integer;
    unitPrice   : Decimal;
    subtotal    : Decimal;
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