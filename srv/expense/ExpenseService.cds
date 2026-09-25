using { business.system as my } from '../..//db/schema';

service ExpenseService {
    entity Expense as projection on my.Expense;
}