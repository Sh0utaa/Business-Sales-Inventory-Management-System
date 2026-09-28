import cds from '@sap/cds';

import { getProduct, reduceStock } from '../helpers/product.js';
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
                const product = getProduct(item.product_ID);
                
                if(!product) {
                    req.reject(400, `Product ${productID} does not exist!`)
                }

                validateOrderItem(item, product, req);

                calculateItemValues(item, product);

                await reduceStock(product, item.quantity);
            }

            req.data.total = calculateOrderTotal(req.data.items);
            req.data.deliveryFee = calculateDeliveryFee();
        }) 

        await super.init();
    }
}

export default SalesService;