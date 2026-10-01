import { SELECT } from '@sap/cds/lib/ql/cds-ql.js';

async function getUserByUserID(id) {
    const user = await SELECT.one
        .from('User')
        .where({ userID: id })

    return user;
}

async function getUserByUUIDByUserID(id) {
    const user = await getUserByUserID(id);

    return user?.ID;
}

async function getRandomDeliveryDriver() {
    const deliveryDrivers = await SELECT
        .from('User')
        .where({ employeeRole: 'Delivery' });

    if (deliveryDrivers.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * deliveryDrivers.length);

    return deliveryDrivers[randomIndex];
}

export {
    getUserByUserID,
    getUserByUUIDByUserID,
    getRandomDeliveryDriver
}