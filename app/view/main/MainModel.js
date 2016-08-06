
Ext.define('SpendingPortal.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',
	requires: [
		'SpendingPortal.model.ChartDatum',
		'SpendingPortal.model.Sponsor',
		'SpendingPortal.model.Earmark'
	],
	data: {
		selectedEarmark: null,
		selectedSponsorIds: null
	},

	stores: {

		Sponsors: {
			autoLoad: true,
            model: 'SpendingPortal.model.Sponsor',
            remoteFilter: false,
            pageSize: 600
		},

		EarmarksStore: {
			model: 'SpendingPortal.model.Earmark',
			remoteFilter: true,
			remoteSort: false,
			groupField: 'SPONSORNAME',
			pageSize: 500,
			filters: [
				{
					property: 'IDSPONSOR', value: '{selectedSponsorIds}'
				}
			]
		},

		ChartData: {
			model: 'SpendingPortal.model.ChartDatum',
			remoteFilter: true,
			filters: [
				{
					property: 'IDSPONSOR', value: '{selectedSponsorIds}'
				}
			]
		}
	}
});

