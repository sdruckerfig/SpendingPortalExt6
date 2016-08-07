Ext.define('SpendingPortal.view.earmarks.SponsorSelectorController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.sponsorselector',

	requires: [
		'SpendingPortal.view.earmarks.Earmarks'
	],

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
	},

	onSponsorDisclosure: function(list,record,target,index,e) {
		this.getViewModel().set('selectedSponsorIds',record.get('IDSPONSOR'));
		this.getView().push({
			xtype: 'earmarks',
			title: record.get('FIRSTNAME') + ' ' + record.get('LASTNAME')
		});
	}, 

	onSelectionChange: function(list,models) {
		var selections = list.getSelections();
		var aIds= Ext.Array.pluck(selections,"id");
		this.getViewModel().set('selectedSponsorIds',aIds.join(','));
	},

	onBack: function(nav,eOpts) {
		this.redirectTo('');
	}

	/*
	,

	onSponsorSelect: function(grid, aSelections) {
		this.getViewModel().set('selectedSponsorIds', Ext.Array.pluck(aSelections,"id").join(','));
	}
	*/

});