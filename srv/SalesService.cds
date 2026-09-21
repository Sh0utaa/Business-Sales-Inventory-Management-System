using { business.system as my } from '../db/schema';

service SalesService {
    entity Product as projection on my.Product;
    entity Order as projection on my.Order;
    entity OrderItems as projection on my.OrderItem;
}