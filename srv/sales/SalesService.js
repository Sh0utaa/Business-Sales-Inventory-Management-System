import cds from '@sap/cds';

import { getProduct, reduceStock, processDelivery } from '../helpers/product.js';
import { validateOrderItem, calculateItemValues } from '../helpers/orderItems.js'
import { calculateOrderTotal, calculateDeliveryFee } from '../helpers/order.js'

class SalesService extends cds.ApplicationService {
    async init() {
        this.before('CREATE', 'Product', async (req) => {
            delete req.data.ID;
        }) 

        this.before('CREATE', 'Order', async (req) => {
            delete req.data.ID;

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
            req.data.deliveryFee = calculateDeliveryFee();
        }) 

        this.after('CREATE', 'Order', async (order, req) => {
            processDelivery(req.data.ID);
        });

        await super.init();
    }
}

export default SalesService;