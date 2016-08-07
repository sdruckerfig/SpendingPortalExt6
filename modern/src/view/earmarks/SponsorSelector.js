Ext.define('SpendingPortal.view.earmarks.SponsorSelector', {
    extend: 'Ext.NavigationView',
    xtype: 'sponsorselector',
    requires: [
        'Ext.List',
        'Ext.Toolbar',
        'SpendingPortal.view.earmarks.SponsorSelectorController',
        'Ext.Button'
    ],

    controller: 'sponsorselector',

    listeners: {
        back: 'onBack'
    },

    items: [{
        title: 'Select a Rep.',
        xtype: 'list',
        reference: 'sponsorlist',
        onItemDisclosure: true,
        bind: {
            store: '{Sponsors}'
        },
        mode: 'multi',
        itemTpl: [
            '{HONORIFIC} {FIRSTNAME} {LASTNAME}<br />',
            '{STATE}'
        ],
        listeners: {
            disclose : 'onSponsorDisclosure',
            selectionchange: 'onSelectionChange'
        },
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'selectfield',
                reference: 'stateselector',
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
            }, {
                xtype: 'button',
                text: 'Clear',
                handler: 'onClear'
            }]
        }]
    }]
});