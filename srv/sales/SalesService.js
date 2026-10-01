import cds from '@sap/cds';

import { getProduct, reduceStock, processDelivery } from '../helpers/product.js';
import { validateOrderItem, calculateItemValues } from '../helpers/orderItems.js'
import { calculateOrderTotal, calculateDeliveryFee } from '../helpers/order.js'
import { getRandomDeliveryDriver, getUserByUserID } from '../helpers/user.js'
import { geocode, getWeather } from '../helpers/weather.js';

class SalesService extends cds.ApplicationService {
    async init() {
        this.before('CREATE', 'Product', async (req) => {
            delete req.data.ID;

            if (req.data.currency && req.data.currency !== 'GEL') {
                return req.error(400, 'Only GEL currency is supported.');
            }
        }) 

        this.before('CREATE', 'Order', async (req) => {
            delete req.data.ID;

            const user = await getUserByUserID(req.user.id); 

            if (!user) {
                return req.error(404, 'No Customer profile is linked to this user.');
            } 

            req.data.customer_ID = user.ID; 

            const driver = await getRandomDeliveryDriver();
            req.data.deliverer_ID = driver?.ID;

            const location = await geocode(user.address);

            const weather = await getWeather(
                location.latitude,
                location.longitude
            );
            
            for(const item of req.data.items) {
                const product = await getProduct(item.product_ID);
                
                if(!product) {
                    req.reject(400, `Product ${item.product_ID} does not exist!`)
                }

                validateOrderItem(item, product, req);

                calculateItemValues(item, product);

                await reduceStock(product, item.quantity);
            }

            req.data.total = calculateOrderTotal(req.data.items);
            req.data.deliveryFee = calculateDeliveryFee(weather);
        }) 

        this.after('CREATE', 'Order', async (order, req) => {
            processDelivery(req.data.ID);
        });

        await super.init();
    }
}

export default SalesService;