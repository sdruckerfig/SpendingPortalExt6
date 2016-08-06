
Ext.define('SpendingPortal.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    requires: [
        'SpendingPortal.view.feedback.Feedback'
    ],

    onFeedback: function(b,e) {  
       Ext.widget('feedback');
   }, 
 
   init: function () {
       Ext.state.Manager.setProvider(
            Ext.create('Ext.state.LocalStorageProvider')
       );
    }
});
