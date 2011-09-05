/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:16 PM
 */
Ext.define('Chlorine.view.BaseForm', {
    extend: 'Ext.form.Panel',
    alias : 'widget.baseform',

    padding: '5 5 5 5',
    initComponent: function(){
        this.buttons = [{
            scale: 'small',
            text: 'Save',
			iconCls: 'save-btn',
            action: 'save'
        },{
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];
        this.callParent(arguments);
    }
});