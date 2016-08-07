Ext.define('SpendingPortal.view.earmarks.Earmarks', {
	extend: 'Ext.List',
	xtype: 'earmarks',
	requires: [
		'SpendingPortal.view.earmarks.EarmarksViewController'
	],
	controller: 'earmarks',
	bind: {
		store: '{EarmarksStore}'
	},
	onItemDisclosure: true,
	itemTpl: [
		'<div style="width:90%">',
		'{BUREAU_TITLE}<br />',
		'{AMT_CONF}K in {ENACTED_YEAR}<br />',
		'<span style="font-size: 0.8em">{EARMARK_DESCRIPTION:ellipsis(70)}</span>',
		'</div>'
	], 
	listeners: {
        itemtap : 'onEarmarkTap'
    }
});
