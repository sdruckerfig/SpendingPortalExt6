Ext.define('SpendingPortal.view.sponsors.Sponsors', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sponsors',

    requires: [
        'SpendingPortal.view.sponsors.SponsorsController',
        'Ext.selection.RowModel',
        'Ext.form.field.Tag'
    ],
    stateful: true,
    stateId: 'SponsorsGrid',

    title: 'Congressional Representatives',
    controller: 'sponsors',
    bind: {
        store: '{Sponsors}'
    },
    listeners: {
        selectionchange : 'onSponsorSelect'
    },

    header: false,
    columnLines: true,
    columns: [{
        xtype: 'gridcolumn',
        renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
            return value.substring(0, 3) + '.';
        },
        width: 50,
        dataIndex: 'HONORIFIC',
        text: 'Hon'
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'FIRSTNAME',
        text: 'First Name'
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'LASTNAME',
        text: 'Last Name',
        flex: 1
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'PARTY',
        text: 'Party'
    }, {
        xtype: 'gridcolumn',
        width: 58,
        dataIndex: 'STATE',
        text: 'State'
    }],

    selModel: Ext.create('Ext.selection.RowModel', {
        mode: 'MULTI'
    }),

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        height: 40,
     
        items: [{
            xtype: 'tagfield',
            tpl: '<tpl for="."><div class="x-boundlist-item">{abbr} - {label}</div></tpl>',
            flex: 1,
            itemId: 'stateFilter',
            fieldLabel: 'Filter by State:',
            displayField: 'label',
            forceSelection: true,
            multiSelect: true,
            queryMode: 'local',
            store: 'States',
            valueField: 'abbr',
            listeners: {
                change: 'onStateSelect'
            }
        }]
       
    }]

});