import cap from '@sap/cds';

class CustomerService extends cap.ApplicationService {
    async init() {
        this.before('CREATE', 'Customer', (req) => {
            delete req.data.ID;
        });

        await super.init();
    }
}

export default CustomerService;