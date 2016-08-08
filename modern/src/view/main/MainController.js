
Ext.define('SpendingPortal.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',
 
  requires: [
    'SpendingPortal.view.earmarks.Earmark'
  ],

  refs: [
   {
        ref: 'earmarkDetailView',
        selector: 'earmark'
   }
  ],

  initialized: false,

  routes : {
    'earmark/:id' : {
        action     : 'onShowEarmark',
        conditions : {
            ':id' : '([0-9]+)'
        }
    },
    'sponsor/:idsponsor/:title' : {
       action: 'onSponsorDisclosure'
    },
    
    'home/:tab' : {
      action: 'onHome'
    }
  },
  
  init: function () {
     Ext.getStore('States').insert(0, [{
       abbr: 'ALL',
       label: 'All States'
     }]);   
  },
  
  onHome: function(tab) {

    switch(tab) {
      case 'earmarks' : 
        var nv = this.lookupReference('sponsorselector');
        if (nv.down('earmarks'))
          nv.pop();
        this.getView().setActiveItem(0);
        break;
      case 'compare' :
         this.getView().setActiveItem(1); 
         break;
      case 'feedback' :
         this.getView().setActiveItem(2); 
         break;
    }
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
  },

  onSponsorDisclosure: function(id,title) {

    var nv = this.lookupReference('sponsorselector');
    if (nv.down('earmark')) {
        nv.pop();
    }
    if (this.getViewModel().get('selectedSponsorIds') != id || !nv.down('earmarks')) {
      if (nv.down('earmarks')) {
        nv.pop();
      }
      this.getViewModel().set('selectedSponsorIds',id);
      nv.push({
        xtype: 'earmarks',
        title: decodeURI(title)
      });
    }
  },

  onTabPanelInitialize: function(tabpanel) {
    var tabbar = tabpanel.getTabBar();     
    tabbar.on({
      'activetabchange' : {
         fn: function(tabbar,newtab,oldtab){ 
          var tablabel = newtab.getText().toLowerCase();    
          if (this.currentTab != tablabel) {
             this.currentTab = tablabel;
             this.redirectTo('home/' + tablabel);
          }
         }, 
         scope: this,  
         buffer: 100
       }
     });
  }
});
