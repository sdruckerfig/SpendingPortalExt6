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
		this.redirectTo('sponsor/' + record.get('IDSPONSOR') + '/' + encodeURI(record.get('FIRSTNAME') + ' ' + record.get('LASTNAME')));
	}, 

	onSelectionChange: function(list,models) {
		var selections = list.getSelections();
		var aIds= Ext.Array.pluck(selections,"id");
		this.getViewModel().set('selectedSponsorIds',aIds.join(','));
	},

	onBack: function(nav,eOpts) {
		Ext.util.History.back();
	},

	onClear: function(b,e) {
		this.lookupReference('sponsorlist').deselectAll();
		this.lookupReference('stateselector').setValue('ALL');
		this.getViewModel().set('selectedSponsorIds','0');
	}

});