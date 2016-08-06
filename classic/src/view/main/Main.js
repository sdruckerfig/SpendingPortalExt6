Ext.define('SpendingPortal.view.main.Main', {
    extend: 'Ext.dashboard.Dashboard',
    alias: 'widget.main',
    requires: [
       'Ext.toolbar.TextItem',
       'SpendingPortal.view.main.MainModel',
       'SpendingPortal.view.main.MainController',
       'SpendingPortal.view.earmarks.Earmarks',
       'SpendingPortal.view.sponsors.Sponsors',
       'SpendingPortal.view.sponsorchart.SponsorChart'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    columnWidths: [0.5, 0.5],
    ui: 'dashboard',
    parts: {
        asponsors: {
            viewTemplate: {
                title: 'Congressional Representatives',
                   
                items: [{
                    xtype: 'sponsors',
                    header: false
                }]  
               
            }
        },
         
        aearmarksviewer: {
            viewTemplate: {
                title: 'Earmarks',
                items: [{
                    xtype: 'earmarksviewer',
                    header: false
                }]
                
            }
        },

        asponsorchart: {
            viewTemplate: {
                title: 'Expenditures',
                items: [{
                    xtype: 'sponsorchart',
                    header: false
                }]
            }
        }
    },

    defaultContent: [ {
        type: 'asponsors',
        columnIndex: 0,
        height: 608
    },   {
        type: 'aearmarksviewer',
        columnIndex: 1,
        height: 300
    },   {
        type: 'asponsorchart',
        columnIndex: 1,
        height: 300
    } ],

    dockedItems: [{
        xtype: 'toolbar',
        ui: 'maintoolbar',
        docked: 'top',
        items: [{
            xtype: 'tbtext',
            text: 'Congressional Earmark Browser',
            cls: 'tradewinds'

        }, {
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            text: 'Feedback',
            handler: 'onFeedback'
        }]
    }]


});