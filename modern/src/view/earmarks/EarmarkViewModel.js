Ext.define('SpendingPortal.view.earmarks.EarmarkViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.earmark',
	requires: [
		'SpendingPortal.model.Earmark'
	],

	data: {
		selectedEarmark: null
	}
});