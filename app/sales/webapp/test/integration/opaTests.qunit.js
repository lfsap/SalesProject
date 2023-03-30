sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'lf/sales/test/integration/FirstJourney',
		'lf/sales/test/integration/pages/SalesHeaderList',
		'lf/sales/test/integration/pages/SalesHeaderObjectPage',
		'lf/sales/test/integration/pages/SalesItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesHeaderList, SalesHeaderObjectPage, SalesItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('lf/sales') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesHeaderList: SalesHeaderList,
					onTheSalesHeaderObjectPage: SalesHeaderObjectPage,
					onTheSalesItemObjectPage: SalesItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);