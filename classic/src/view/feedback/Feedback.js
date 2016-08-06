Ext.define('SpendingPortal.view.feedback.Feedback', {
    extend: 'Ext.window.Window',
    requires:[
        'Ext.form.Panel',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.slider.Single',
        'Ext.form.field.TextArea'
    ],
    alias: 'widget.feedback',

    autoShow: true,
    height: 450,
    width: 436,
    modal: true,
    layout: {
        type: 'fit'
    },
    title: 'Feedback',
    bodyPadding: 10,
    items: [{
        xtype: 'form',
        header: false,
        defaults: {
            allowBlank: false
        },
        layout: 'anchor',
        items: [{
            xtype: 'fieldcontainer',
            
            layout: {
                align: 'stretch',
                type: 'hbox'
            },
            fieldLabel: 'Name',
            items: [{
                xtype: 'textfield',
                flex: 1,
                fieldLabel: '',
                hideLabel: true,
                name: 'firstname',
                allowBlank: false,
                emptyText: 'First Name'
            }, {
                xtype: 'textfield',
                flex: 1,
                fieldLabel: 'Label',
                hideEmptyLabel: false,
                hideLabel: true,
                name: 'lastname',
                allowBlank: false,
                emptyText: 'Last Name'
            }]
        }, {
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'Date',
            name: 'date',
            value: new Date()
        }, {
            xtype: 'textfield',
            anchor: '100%',
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false,
            vtype: 'email'
        }, {
            xtype: 'combobox',
            anchor: '100%',
            fieldLabel: 'Chapter',
            name: 'chapter',
            displayField: 'label',
            queryMode: 'local',
            store: 'BookChapters',
            valueField: 'id'
        }, {
            xtype: 'sliderfield',
            anchor: '100%',
            fieldLabel: 'Rating<br />1=poor,10=great',
            name: 'rating',
            value: 5,
            maxValue: 10,
            minValue: 1
        }, {
            xtype: 'textareafield',
            anchor: '100% -250',
            height: 150,
           // style: 'background-color: white;',
            fieldLabel: 'Feedback',
            labelAlign: 'top',
            name: 'feedback',
            allowBlank: true
        }],
        buttons: [{
            text: 'Submit',
            formBind: true,
            handler: function(button, event) {
                var form = button.up('form');

                form.submit({
                    url: 'http://webapps.figleaf.com/arch101/dataservices/desktop/feedback.cfc?method=submitfeedback',
                    success: function() {
                        Ext.Msg.alert("Feedback Received", "Thank you for your feedback!");
                    },
                    failure: function() {
                        Ext.Msg.alert("Feedback failed", "An error occurred while processing the request.");
                    },
                    scope: this
                });
            }
        }]
    }]
});