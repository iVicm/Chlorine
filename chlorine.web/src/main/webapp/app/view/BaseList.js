/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 11:48 PM
 */
Ext.define('Chlorine.view.BaseList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baselist',

    listCls: 'chlorine-view-list',
    listItemSelector: '.chlorine-view-list-item',
    listOverItemCls: 'chlorine-view-list-item-hover',
    listItemContent:'',
    listItemCls: '',

    layout: 'fit',
    multiSelect: true,
    autoLoadStore: false,
    isForForm: false,

    initComponent: function() {
        this.items = [{
			xtype: 'dataview',
			store: this.store,
			trackOver: true,
            autoScroll: true,
            multiSelect: this.multiSelect,
            cls: this.listCls,
            itemSelector: this.listItemSelector,
            overItemCls: this.listOverItemCls,
            tpl: '<tpl for="."><div class="chlorine-view-list-item ' + this.listItemCls + '">' + this.listItemContent + '</div></tpl>'
		}];

        this.tools = [{
            type:'refresh',
            tooltip: 'Reload',
            action: 'reload'
        }];
        if(!this.isForForm){
            var tbar = this.getToolbarCfg();
            if(tbar && tbar.length > 0){
                this.tbar = this.createToolbar(tbar);
            }
        }
        this.on('afterrender',function(panel){
            if(panel.autoLoadStore){
                panel.down('dataview').store.load();
            }
        });
        this.callParent(arguments);
    },
	getToolbarCfg: function(){
		return [{
			action: 'add',
			cls: 'add-btn',
			tooltip: 'Add'
		},{
			action: 'remove',
			cls: 'remove-btn',
			disabled: true,
			tooltip: 'Remove'
		},{
			action: 'edit',
			cls: 'edit-btn',
			disabled: true,
			tooltip: 'Edit'
		}]
	},
    createToolbar: function(tbarConfig){
        var buttons = ['->'];
        for(var i = 0; i < tbarConfig.length; i++){
            buttons.push(this.createToolbarButton(tbarConfig[i]));
        }
        return buttons;
    },
    createToolbarButton: function(config){
        return {
            scale: 'small',
            iconCls: config.cls,
            disabled: config.disabled,
            iconAlign: 'top',
            tooltip: config.tooltip,
            text: config.text,
            action: config.action
        };
    }
});