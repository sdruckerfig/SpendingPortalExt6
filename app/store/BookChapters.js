Ext.define('SpendingPortal.store.BookChapters', {
    extend: 'Ext.data.Store',
    alias: 'store.bookchapters',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'label'
    }],
    proxy: {
        type: 'ajax',
        url: 'http://webapps.figleaf.com/ext5lab/bookchapters.json'
    },
    autoLoad: true
});