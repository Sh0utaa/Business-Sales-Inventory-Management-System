namespace business.system;

using { cuid } from '@sap/cds/common';

entity User : cuid {
    userID       : String;
    name         : String not null;
    phone        : String;
    address      : String;
    userRole     : UserRole not null;
    employeeRole : EmployeeRole;
}

type UserRole : String enum {
    Customer;
    Employee;
}

type EmployeeRole : String enum {
    Admin;
    Manager;
    Delivery;
}

entity Product : cuid {
    name  : String not null;
    stock : Integer not null;
    price : Decimal(10, 2) not null;
    currency : String(3) default 'GEL';
}

entity Order {
    key ID      : UUID @readonly;
    customer    : Association to User @assert.target not null;
    deliverer   : Association to User @assert.target;

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

    @readonly unitPrice : Decimal(10,2);
    @readonly subtotal  : Decimal(10,2);
    @readonly currency  : String(3);
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