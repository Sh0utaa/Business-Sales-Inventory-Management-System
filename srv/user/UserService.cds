using { business.system as my } from '../../db/schema';

service UserService {
    entity User as projection on my.User;
}