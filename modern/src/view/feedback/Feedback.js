Ext.define('SpendingPortal.view.feedback.Feedback', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.field.Text',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Slider',
        'Ext.field.TextArea'
    ],
    xtype: 'feedback',
    defaults: {
        labelAlign: 'top',
        required: true
    },
    items: [{
            xtype: 'textfield',
            label: 'First Name',
            name: 'firstname',

        }, {
            xtype: 'textfield',
            label: 'Last Name',
            name: 'lastname',
        }, {
            xtype: 'datepickerfield',
            anchor: '100%',
            label: 'Date',
            name: 'date',
            value: new Date()
        }, {
            xtype: 'textfield',
            label: 'Email',
            name: 'email',
            vtype: 'email'
        }, {
            xtype: 'selectfield',
            label: 'Chapter',
            name: 'chapter',
            displayField: 'label',
            queryMode: 'local',
            store: 'BookChapters',
            valueField: 'id'
        }, {
            xtype: 'sliderfield',

            label: 'Rating',
            name: 'rating',
            value: 5,
            maxValue: 10,
            minValue: 1
        }, {
            xtype: 'textareafield',
            label: 'Feedback',
            name: 'feedback'
        }, {
            xtype: 'titlebar',
            title: 'Feedback',
            docked: 'top',
            items: [{
                iconCls: 'x-fa fa-save',
                align: 'right',
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
        }

    ]

});