import cds from '@sap/cds';

class EmployeeService extends cds.ApplicationService {
    async init() {
        this.before('CREATE', 'Employee', async (req) => {
            delete req.data.ID;
        }) 

        await super.init();
    }
}

export default EmployeeService;