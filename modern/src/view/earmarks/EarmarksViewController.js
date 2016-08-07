Ext.define('SpendingPortal.view.earmarks.EarmarksViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.earmarks',

	requires: [
		'SpendingPortal.view.earmarks.Earmark'
	],
	onEarmarkTap: function(list,index,target,record,e,eOpts) {
		this.redirectTo('earmark/' + record.get('EARMARK_ID'));
	}

});