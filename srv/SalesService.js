import cds from '@sap/cds';

class SalesService extends cds.ApplicationService {
    init() {
        this.before('CREATE', 'Order', async (req) => {
            console.log("SHOTA MAGARIA");
        });

        return super.init();
    }
}

export default SalesService;