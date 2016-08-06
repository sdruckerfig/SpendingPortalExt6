Ext.define('SpendingPortal.view.earmarks.Earmarks', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.earmarksviewer',

    requires: [
        'Ext.grid.column.Number',
        'Ext.grid.column.Template',
        'Ext.grid.feature.Grouping',
        'SpendingPortal.view.earmarks.EarmarksViewModel'
    ],
   
    viewModel: {
        type: "earmarks"
    },
    layout: {
        type: 'border'
    },
    closable: false,
    title: 'Please Select Sponsor(s)',


    items: [
  
    {
        xtype: 'gridpanel',
       
        flex: 2,
        
        stateful: true,
        stateId: 'EarmarksGrid',

        region: 'center',
        split: true,
        itemId: 'earmarkGrid',
        allowDeselect: true,

        bind: {
            selection: '{selectedEarmark}',
            store: '{EarmarksStore}'
        },
        columns: [{
            xtype: 'numbercolumn',
            width: 50,
            dataIndex: 'ENACTED_YEAR',
            text: 'Year',
            format: '0000'
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'AGENCY_TITLE',
            text: 'Agency',
            flex: 1
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'BUREAU_TITLE',
            text: 'Bureau',
            flex: 1
        }, {
            xtype: 'templatecolumn',
            tpl: [
                '{[Ext.util.Format.usMoney(values.AMT_CONF * 1000)]}'
            ],
            align: 'right',
            text: 'Amt'
        }],

        features: [{
            ftype: 'grouping',
            groupHeaderTpl: [
                'Sponsor: {name}'
            ]
        }]
    }, {
        xtype: 'panel',
        flex: 1,
        region: 'south',
        split: true,
        height: 150,
        itemId: 'earmarkdetail',
        bind: {
            data: '{selectedEarmark}'
        },
        tpl: [
            'Sponsor: {SPONSOR.HONORIFIC} {SPONSOR.FIRSTNAME} {SPONSOR.LASTNAME} {SPONSOR.STATE}<br />',
            '<p>{EARMARK_DESCRIPTION}</p>',
            ''
        ],
        autoScroll: true,
        collapseDirection: 'bottom',
        collapsed: true,
        collapsible: true,
        header: false,
        title: 'Details',
        tools: [{
            xtype: 'tool'
        }]
    }
  ]

});