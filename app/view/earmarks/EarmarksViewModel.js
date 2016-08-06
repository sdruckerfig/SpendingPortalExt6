Ext.define('SpendingPortal.view.earmarks.EarmarksViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.earmarks',
	requires: [
		'SpendingPortal.model.Earmark'
	],

	data: {
		selectedEarmark: null
	},

	stores: {

	}
});