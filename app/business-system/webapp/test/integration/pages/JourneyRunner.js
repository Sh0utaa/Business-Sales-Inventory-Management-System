sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"businesssystem/test/integration/pages/OrderList.gen",
	"businesssystem/test/integration/pages/OrderObjectPage.gen",
	"businesssystem/test/integration/pages/OrderItemObjectPage.gen"
], function (JourneyRunner, OrderListGenerated, OrderObjectPageGenerated, OrderItemObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('businesssystem') + '/test/flp.html#app-preview',
        pages: {
			onTheOrderListGenerated: OrderListGenerated,
			onTheOrderObjectPageGenerated: OrderObjectPageGenerated,
			onTheOrderItemObjectPageGenerated: OrderItemObjectPageGenerated
        },
        async: true
    });

    return runner;
});

