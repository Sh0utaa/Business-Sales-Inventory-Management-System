import cds from '@sap/cds';

class SalesService extends cds.ApplicationService {
    init() {
        this.before('CREATE', 'Customer', async (req) => {
            console.log(req.data);
        });

        this.before('CREATE', 'Employee', async (req) => {
            console.log(req.data);
        });

        return super.init();
    }
}

export default SalesService;