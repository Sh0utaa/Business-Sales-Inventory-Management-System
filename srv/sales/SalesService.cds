using { business.system as my } from '../../db/schema';

service SalesService {
    entity Product as projection on my.Product {
        @readonly
        ID,
        name,
        price
    };
    entity Order as projection on my.Order {
        @readonly
        ID,
        customer,
        items
    };
}