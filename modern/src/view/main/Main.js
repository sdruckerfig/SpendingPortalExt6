
Ext.define('SpendingPortal.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'SpendingPortal.view.main.MainModel',
        'SpendingPortal.view.main.MainController',
        'Ext.NavigationView',
        'SpendingPortal.view.earmarks.SponsorSelector',
        'SpendingPortal.view.feedback.Feedback',
        'SpendingPortal.view.sponsorchart.SponsorChart'
    ],

    viewModel: 'main',
    controller: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            xtype: 'sponsorselector',
            reference: 'sponsorselector',
            title: 'Earmarks',
            iconCls: 'x-fa fa-home'
        },{
            title: 'Compare',
            layout: 'fit',
            items: [
                {
                  xtype: 'sponsorchart'
                },
                {
                  xtype: 'titlebar',
                  title: 'Compare',
                  docked: 'top'
                }
            ],
            iconCls: 'x-fa fa-user',
           
        },
        {
            title: 'Feedback',
            xtype: 'feedback',
            iconCls: 'x-fa fa-file-o'
        }
        
        
    ]
});
