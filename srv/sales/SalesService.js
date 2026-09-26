import cds from '@sap/cds';

class SalesService extends cds.ApplicationService {
    async init() {
        this.before('CREATE', 'Product', async (req) => {
            delete req.data.ID;
        }) 

        this.before('CREATE', 'Order', async (req) => {
            delete req.data.ID;

            for(const item of req.data.items) {
                const productID = item.product_ID;

                const product = await SELECT.one
                    .from('Product')
                    .where({ ID: productID });
                
                if(!product) {
                    req.reject(400, `Product ${productID} does not exist!`)
                }

                if(product.quantity <= 0) {
                    req.reject(400, "Quantity must be grader than 0");
                }

                if(product.stock < item.quantity) {
                    req.reject(400, `Not enough stock for ${product.name}`);
                }

            }

            // TODO
            //   Calculate unitPrice
            //   Calculate subtotal
            //   Calculate total
            //   Reduce stock

        }) 

        await super.init();
    }
}

export default SalesService;