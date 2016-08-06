
Ext.define('SpendingPortal.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',
 

  init: function () {
     Ext.getStore('States').insert(0, [{
       abbr: 'ALL',
       label: 'All States'
     }]);   
   }
});
