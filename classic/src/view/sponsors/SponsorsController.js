Ext.define('SpendingPortal.view.sponsors.SponsorsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.sponsors',

	onStateSelect: function(tagField, states) {
		
		var store = this.getViewModel().getStore('Sponsors')
			
		
		store.clearFilter();

		states = states.join(',');

		if (!Ext.isEmpty(states)) {
			store.filterBy(function(rec) {
				var state = rec.get('STATE');

				if (states.indexOf(state) >= 0)
					return true;
				else
					return false;
			});
		}
	},

	onSponsorSelect: function(grid, aSelections) {
		this.getViewModel().set('selectedSponsorIds', Ext.Array.pluck(aSelections,"id").join(','));
	}

});