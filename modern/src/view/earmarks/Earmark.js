Ext.define('SpendingPortal.view.earmarks.Earmark', {
	extend: 'Ext.Container',
	xtype: 'earmark',
	requires: [
		'SpendingPortal.view.earmarks.EarmarkViewController',
		'SpendingPortal.view.earmarks.EarmarkViewModel'
	],

	controller: 'earmark',
	viewModel: {
        type: "earmark"
    },
    padding: 5,
    bind: {
		data : '{selectedEarmark}'
	},
	scrollable: true,
	tpl: [
		'<div class="earmarkfield">',
			'<label>Agency:</label>',
			'{AGENCY_TITLE}<br />',
			'{BUREAU_TITLE}',
		'</div>',
		'<div class="earmarkfield">',
			'<label>Year:</label>',
	        '{ENACTED_YEAR}',
        '</div>',
        '<div class="earmarkfield">',
			'<label>Amount:</label>',
	        '{AMT_CONF}K',
        '</div>',
        '<div class="earmarkfield">',
			'<label>Description:</label>',
			'{SHORT_DESCRIPTION}',
		'</div>',
		'<div class="earmarkfield">',
			'<label>Excerpt:</label>',
	        '{SC_F_CTTN_EXCERPT}',
        '</div>'
	]
});
