/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 11:48 PM
 */
Ext.define('Chlorine.view.ListPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.listpanel',

    listCls: 'chlorine-view-list',
    listItemSelector: '.chlorine-view-list-item',
    listOverItemCls: 'chlorine-view-list-item-hover',
    listTpl:'<tpl for="."><div class="chlorine-view-list-item">{name}</div></tpl>',

    initComponent: function() {
        this.items = [{
			xtype: 'dataview',
			store: this.store,
			trackOver: true,
            cls: this.listCls,
            itemSelector: this.listItemSelector,
            overItemCls: this.listOverItemCls,
            tpl: this.listTpl
		}];

        this.tools = [{
            type:'refresh',
            tooltip: 'Refresh',
            handler: Ext.bind(this.reload, this)
        }];

        this.on('expand', function(panel, eOpts){
            if(!panel.down('dataview').store.loaded){
                panel.reload();
            }
        });
        this.callParent(arguments);
    },
    reload: function(config){
        this.down('dataview').store.load();
    }
});