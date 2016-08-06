Ext.define('SpendingPortal.view.earmarks.SponsorSelectorController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.sponsorselector',

	onStateSelect: function(tagField, newValue) {
		
		var store = this.getViewModel().getStore('Sponsors')	
		
		store.clearFilter();

		newValue = newValue.get('abbr');

		if (newValue != 'ALL') {
			store.filterBy(function(rec) {
				var state = rec.get('STATE');
				
				if (state == newValue)
					return true;
				else
					return false;
			});
		}
	}

	/*
	,

	onSponsorSelect: function(grid, aSelections) {
		this.getViewModel().set('selectedSponsorIds', Ext.Array.pluck(aSelections,"id").join(','));
	}
	*/

});