

Ext.define('SpendingPortal.model.Sponsor', {
    extend: 'Ext.data.Model',


    idProperty: 'IDSPONSOR',
    
    fields: [
        {
            name: 'IDSPONSOR'
        },
        {
            name: 'HONORIFIC'
        },
        {
            name: 'FIRSTNAME'
        },
        {
            name: 'LASTNAME'
        },
        {
            name: 'PARTY'
        },
        {
            name: 'STATE'
        }
    ],

    proxy: {
        type: 'jsonp',
        url: 'http://webapps.figleaf.com/ext5lab/sponsor.cfc?method=wsBigJSONP',
        reader: {
            type: 'json',
            rootProperty: 'ROWS',
            successProperty: 'SUCCESS',
            totalProperty: 'RESULTS'
        }
    }
});