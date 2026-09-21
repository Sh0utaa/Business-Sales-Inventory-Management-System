using { business.system as my } from '../db/schema';

service ProductService {
    entity Product as projection on my.Product;
}