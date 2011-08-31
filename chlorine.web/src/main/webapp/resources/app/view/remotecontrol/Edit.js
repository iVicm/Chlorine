/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:16 PM
 */
Ext.define('Chlorine.view.remotecontrol.Edit', {
    extend: 'Ext.form.Panel',
    alias : 'widget.remotecontroledit',

    title : 'Edit Remote Control',
    padding: '5 5 5 5',
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
            maxValue: 65000,
            minValue: 1024
        }];

        this.buttons = [{
            text: 'Save',
            action: 'save'
        },{
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];
        this.callParent(arguments);
    }
});