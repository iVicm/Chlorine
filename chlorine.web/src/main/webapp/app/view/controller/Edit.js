/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:16 PM
 */
Ext.define('Chlorine.view.controller.Edit', {
    extend: 'Chlorine.view.BaseForm',
    alias : 'widget.controlleredit',

    title : 'Edit Controller',
    iconCls: 'controller-panel',
    initComponent: function(){
        this.items = [{
            xtype: 'textfield',
            name : 'host',
            fieldLabel: 'Host',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            name : 'port',
            fieldLabel: 'Port',
            allowBlank: false,
			minValue: 1024,
			maxValue: 65535
        }, {
			xtype: 'browserlist',
            autoLoadStore: true,
            isForForm: true,
            height: 150,
            width: '50%'
		}];
        this.callParent(arguments);
    }
});