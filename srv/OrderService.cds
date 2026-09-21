using { business.system as my } from '../db/schema';

service OrderService {
    entity Order as projection on my.Order;
}