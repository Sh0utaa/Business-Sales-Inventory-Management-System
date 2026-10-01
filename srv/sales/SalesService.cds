using { business.system as my } from '../../db/schema';

service SalesService {

    @restrict: [
        { grant: 'READ', to: ['Admin', 'Manager', 'Delivery', 'any'] },
        { grant: ['CREATE', 'UPDATE', 'DELETE'], to: ['Admin', 'Manager'] }
    ]
    entity Product as projection on my.Product;
    entity Order as projection on my.Order;
}