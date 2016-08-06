

Ext.define('SpendingPortal.model.ChartDatum', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'label'
        },
        {
            name: 'value',
            type: 'int'
        }
    ],

    proxy: {
        type: 'jsonp',
        url: 'http://webapps.figleaf.com/ext5lab/earmark.cfc?method=getSponsorStats'
    }
});