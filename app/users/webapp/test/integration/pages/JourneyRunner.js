sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"users/test/integration/pages/UserList.gen",
	"users/test/integration/pages/UserObjectPage.gen"
], function (JourneyRunner, UserListGenerated, UserObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('users') + '/test/flp.html#app-preview',
        pages: {
			onTheUserListGenerated: UserListGenerated,
			onTheUserObjectPageGenerated: UserObjectPageGenerated
        },
        async: true
    });

    return runner;
});

