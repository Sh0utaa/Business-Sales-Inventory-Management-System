sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"salesbusinessservice/test/integration/pages/OrderList.gen",
	"salesbusinessservice/test/integration/pages/OrderObjectPage.gen",
	"salesbusinessservice/test/integration/pages/OrderItemObjectPage.gen"
], function (JourneyRunner, OrderListGenerated, OrderObjectPageGenerated, OrderItemObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('salesbusinessservice') + '/test/flp.html#app-preview',
        pages: {
			onTheOrderListGenerated: OrderListGenerated,
			onTheOrderObjectPageGenerated: OrderObjectPageGenerated,
			onTheOrderItemObjectPageGenerated: OrderItemObjectPageGenerated
        },
        async: true
    });

    return runner;
});

