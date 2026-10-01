import cds from '@sap/cds';

class UserService extends cds.ApplicationService {
    async init() {
        this.before('CREATE', 'User', async (req) => {
            delete req.data.ID;
        }) 

        await super.init();
    }
}

export default UserService;