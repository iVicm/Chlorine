/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:16 PM
 */
Ext.define('Chlorine.view.project.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.projectedit',

    title : 'Edit Project',
    layout: 'fit',
    autoShow: true,
    initComponent: function(){
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];
        this.callParent(arguments);
    }
});