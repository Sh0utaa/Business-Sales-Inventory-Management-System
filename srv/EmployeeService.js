import cds from '@sap/cds';

class EmployeeService extends cds.ApplicationService {
    init() {
        this.before('CREATE', 'Employee', async (req) => {
            if('ID' in req.data) {
                req.reject(403, "ID must not be provided by the client!")
            };
        })
    }
}

export default EmployeeService;