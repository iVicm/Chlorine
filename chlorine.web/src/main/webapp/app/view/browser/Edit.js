/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:16 PM
 */
Ext.define('Chlorine.view.browser.Edit', {
    extend: 'Chlorine.view.BaseForm',
    alias : 'widget.browseredit',

    title : 'Edit Browser',
    iconCls: 'browser-panel',
    initComponent: function(){
        this.items = [{
            xtype: 'textfield',
            name : 'name',
            fieldLabel: 'Name',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            name : 'version',
            fieldLabel: 'Version',
            allowBlank: false
        }];
        this.callParent(arguments);
    }
});