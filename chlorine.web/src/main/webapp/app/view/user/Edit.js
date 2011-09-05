/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:16 PM
 */
Ext.define('Chlorine.view.user.Edit', {
    extend: 'Chlorine.view.BaseForm',
    alias : 'widget.useredit',

    title : 'Edit User',
    iconCls: 'user-panel',
    initComponent: function(){
        this.items = [{
            xtype: 'textfield',
            name : 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }];
        this.callParent(arguments);
    }
});