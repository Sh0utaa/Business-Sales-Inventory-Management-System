using { business.system as my } from '../../db/schema';

service UserService {

    @restrict: [
        { grant: '*', to: ['Admin'] },
        { grant: 'READ', to: ['Manager'] },
    ]
    entity User as projection on my.User;
}