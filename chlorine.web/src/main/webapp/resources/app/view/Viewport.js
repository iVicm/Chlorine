/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 3:51 PM
 */
Ext.define('Chlorine.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    items:{
        xtype: 'panel',
        layout: 'border',
        items:[
            {
                region: 'west',
                margins: '5 5 5 5',
                xtype:'panel',
                width: 200,
                collapsible: true,
                layout: 'accordion',
                items: [
                    {xtype: 'projectlist'},
                    {xtype: 'userlist'},
                    {xtype: 'remotecontrollist'}
                ]
            },{
                region: 'center',
                margins: '5 0 5 5',
                xtype:'tabpanel'
            }
        ]
    }
});