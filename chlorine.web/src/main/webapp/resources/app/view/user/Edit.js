/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:16 PM
 */
Ext.define('Chlorine.view.user.Edit', {
    extend: 'Ext.form.Panel',
    alias : 'widget.useredit',

    title : 'Edit User',
    padding: '5 5 5 5',
    initComponent: function(){
        this.items = [{
            xtype: 'textfield',
            name : 'username',
            fieldLabel: 'Username',
            allowBlank: false
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