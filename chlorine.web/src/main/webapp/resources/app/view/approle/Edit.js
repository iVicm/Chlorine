/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:16 PM
 */
Ext.define('Chlorine.view.approle.Edit', {
    extend: 'Ext.form.Panel',
    alias : 'widget.approleedit',

    title : 'Edit Application Role',
    padding: '5 5 5 5',
    initComponent: function(){
        this.items = [{
            xtype: 'textfield',
            name : 'name',
            fieldLabel: 'Name',
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