Ext.define('SpendingPortal.view.earmarks.EarmarkViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.earmark',

	init: function() {
		var view = this.getView();
	
		SpendingPortal.model.Earmark.load(this.getView().earmarkId, {
			scope: this,
			success: function(rec,op) {
				console.log(rec.getData());
				view.getViewModel().set('selectedEarmark',rec.getData());
			},
			failure: function(rec,op) {
				alert('fail');
				console.log(rec);
			}
		});
	}

});