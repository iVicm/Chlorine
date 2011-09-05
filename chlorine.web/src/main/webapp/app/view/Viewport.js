/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 3:51 PM
 */
Ext.define('Chlorine.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
	requires: ['Chlorine.view.HomePanel'],
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
				defaults:{hideCollapseTool: true},
                items: [
                    {xtype: 'userlist', autoLoadStore: true},
                    {xtype: 'browserlist'},
					{xtype: 'controllerlist'}
                ]
            },{
                region: 'center',
                margins: '5 0 5 5',
                xtype:'tabpanel',
                name: 'content-tab-panel',
				items: [
                    {xtype: 'homepanel'}
                ]
            }
        ]
    }
});