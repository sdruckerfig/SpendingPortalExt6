Ext.define('SpendingPortal.view.earmarks.SponsorSelector', {
    extend: 'Ext.NavigationView',
    xtype: 'sponsorselector',
    requires: [
        'Ext.List',
        'Ext.Toolbar',
        'SpendingPortal.view.earmarks.SponsorSelectorController'
    ],

    controller: 'sponsorselector',

    items: [{
        title: 'Select a Rep.',
        xtype: 'list',
        onItemDisclosure: true,
        bind: {
            store: '{Sponsors}'
        },
        itemTpl: [
            '{HONORIFIC} {FIRSTNAME} {LASTNAME}<br />',
            '{STATE}'
        ],
        listeners: {
            disclose : 'onSponsorDisclosure'
        },
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'selectfield',
                autoSelect: true,
                displayField: 'label',
                valueField: 'abbr',
                flex: 1,
                bind: {
                    store: 'States',
                },
                listeners: {
                   change: 'onStateSelect'
                }
            }]
        }]
    }]
});