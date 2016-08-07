Ext.define('SpendingPortal.view.sponsorchart.SponsorChart', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.sponsorchart',

    requires: [
        'Ext.chart.axis.sprite.Axis3D',
        'Ext.chart.series.Bar3D',
        'Ext.chart.axis.Category3D',
        'Ext.chart.axis.Numeric3D'
    ],

    title: 'Compare Expenditures',
    bind: {
        store: '{ChartData}'
    },

    animate: true,
    insetPadding: 20,
    axes: [{
        type: 'category3d',
        fields: [
            'label'
        ],
        label: {
            rotate: {
                degrees: 45
            },
            renderer: function(s) {
                return Ext.String.ellipsis(s, 10);
            }
        },
        title: 'Elected Representative',
        position: 'bottom'
    }, {
        type: 'numeric3d',
        fields: [
            'value'
        ],
        label: {
            renderer: Ext.util.Format.usMoney
        },
        title: 'Expenditures',
        decimals: 0,
        position: 'left'
    }],
    series: [{
        type: 'bar3d',
        label: {
            display: 'inside',
            field: 'value',
            color: '#333',
            'text-anchor': 'middle',
            renderer: function(text,sprite,config,renderData,index) {
                var rec = renderData.store.getAt(index);
                return rec.get('label') + " - " + Ext.util.Format.usMoney(rec.get('value')).split('.')[0] + 'K';
            }
        },
        xField: 'label',
        yField: 'value'
    }]
});