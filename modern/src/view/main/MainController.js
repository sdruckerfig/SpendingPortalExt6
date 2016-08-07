
Ext.define('SpendingPortal.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',
 
  requires: [
    'SpendingPortal.view.earmarks.Earmark'
  ],

  refs: [{
        ref: 'earmarkDetailView',
        selector: 'earmark'
  }],

  routes : {
    'earmark/:id' : {
        action     : 'onShowEarmark',
        conditions : {
            ':id' : '([0-9]+)'
        }
    }
  },
  
  init: function () {
     Ext.getStore('States').insert(0, [{
       abbr: 'ALL',
       label: 'All States'
     }]);   
  },
   
  onShowEarmark : function(id) {
    var nv = this.lookupReference('sponsorselector');
    if (nv.down('earmark')) {
      nv.pop();
    }
    nv.push({
      xtype: 'earmark',
      earmarkId : id,
      title: 'Earmark'
    });
  }
});
