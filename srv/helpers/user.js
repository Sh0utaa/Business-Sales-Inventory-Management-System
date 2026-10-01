import { SELECT, UPDATE } from '@sap/cds/lib/ql/cds-ql.js';

async function getCustomerByUserId(id) {
    const user = await SELECT.one
        .from('Customer')
        .where({ userID: id })

    return user;
}

export {
    getCustomerByUserId
}