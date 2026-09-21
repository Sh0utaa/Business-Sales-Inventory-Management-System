using { business.system as my } from '../db/schema';

service EmployeeService {
    entity Employee as projection on my.Employee;
}