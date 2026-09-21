using { business.system as my } from '../db/schema';

service OrderItemService {
    entity OrderItem as projection on my.OrderItem;
}