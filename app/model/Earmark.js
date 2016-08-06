

Ext.define('SpendingPortal.model.Earmark', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'EARMARK_ID',
        type: 'int'
    }, {
        name: 'EARMARK_DESCRIPTION'
    }, {
        name: 'ENACTED_YEAR',
        type: 'int'
    }, {
        name: 'AGENCY_TITLE'
    }, {
        name: 'BUREAU_TITLE'
    }, {
        name: 'AMT_CONF',
        type: 'float'
    }, {
        name: 'SPONSOR'
    }, {
        name: 'SPENDINGCOMMITTEE'
    }, {
        convert: function(v, rec) {
            if (rec.data.SPONSOR) {
                return rec.get('SPONSOR').LASTNAME + ", " + rec.get('SPONSOR').FIRSTNAME;
            } else {
                return v;
            }
        },
        name: 'SPONSORNAME'
    }],

    proxy: {
        type: 'jsonp',
        url: 'http://webapps.figleaf.com/ext5lab/earmark.cfc?method=wsBigJSONP',
        reader: {
            type: 'json',
            rootProperty: 'ROWS',
            successProperty: 'SUCCESS',
            totalProperty: 'RESULTS'
        }
    }
});