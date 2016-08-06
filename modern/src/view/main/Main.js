
Ext.define('SpendingPortal.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'SpendingPortal.view.main.MainModel',
        'SpendingPortal.view.main.MainController',
        'Ext.NavigationView',
        'SpendingPortal.view.earmarks.SponsorSelector'
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
            title: 'Earmarks',
            iconCls: 'x-fa fa-home'
        },{
            title: 'Compare',
            iconCls: 'x-fa fa-user',
        }
        
    ]
});
