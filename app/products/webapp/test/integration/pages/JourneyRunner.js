sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"products/test/integration/pages/ProductList.gen",
	"products/test/integration/pages/ProductObjectPage.gen"
], function (JourneyRunner, ProductListGenerated, ProductObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('products') + '/test/flp.html#app-preview',
        pages: {
			onTheProductListGenerated: ProductListGenerated,
			onTheProductObjectPageGenerated: ProductObjectPageGenerated
        },
        async: true
    });

    return runner;
});

