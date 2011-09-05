/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 2:34 PM
 */
Ext.define('Chlorine.controller.BaseController', {
    extend: 'Ext.app.Controller',
	
	baseType: '',
	baseModel: '',
	getBaseStore: function(){ return null;},
    getTitle: function(){ return null;},
	
	init: function() {
		
        this.control(this.baseType + 'list',{expand: this.reload});
		this.control(this.baseType + 'list dataview', {
			itemdblclick: this.edit,
			selectionchange: this.selectionChange
		});
        this.control(this.baseType + 'list [action=reload]', {click: this.reload});
		
        this.control(this.baseType + 'list button[action=add]', {click: this.add});
        this.control(this.baseType + 'list button[action=edit]', {click: this.edit});
        this.control(this.baseType + 'list button[action=remove]', {click: this.remove});

        this.control(this.baseType + 'edit button[action=save]', {click: this.save});
    },
	
    selectionChange: function(view, selections){
        var panel = Ext.ComponentQuery.query(this.baseType + 'list')[0];
        var removeBtn = panel.down('button[action=remove]');
        var editBtn = panel.down('button[action=edit]');
        if(selections.length){
            removeBtn.enable();
            editBtn.enable();
        }else{
            removeBtn.disable();
            editBtn.disable();
        }
    },
    reload:function(){
        var store = this.getBaseStore();
        if(!store.loaded){
            store.load();
        }
    },
    getForm:function(record){
        var tabPanel = Ext.ComponentQuery.query('panel[name=content-tab-panel]')[0];
        var form = tabPanel.down(this.baseType + 'edit[recordId=' + record.get('id') + ']');
        if(!form){
            form = Ext.create('Chlorine.view.' + this.baseType +'.Edit', {
                recordId: record.get('id'),
                closable: true,
				controller: this
            });
            tabPanel.add(form);
        }
        form.loadRecord(record);
        form.show();
        return form;
    },
    edit: function(view, record) {
        if(!record.data){
            view = Ext.ComponentQuery.query(this.baseType + 'list dataview')[0];
            var records = view.getSelectionModel().getSelection();
            for(var i = 0; i < records.length; i++){
                this.edit(view, records[i]);
            }
            return;
        }
        if(view.up('baselist').isForForm){
            return;
        }
        var form = this.getForm(record);
		var title = this.getTitle(record);
        form.setTitle(title);
    },
    add:function(){
        var record = Ext.create('Chlorine.model.' + this.baseModel,{});
		this.edit(null, record);
    },
	save: function(button) {
        var form = button.up('form')
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
		var hasErrors = false;
		if(!form.getForm().isValid()){
			hasErrors = true;
		}else{
			var errors = record.validate();
			if(!errors.isValid()){
				hasErrors = true;
			}
		}
		if(hasErrors){
			Ext.Msg.alert('Error', 'There are some errors in your data, the operation cannot be completed.');
			return;
		}
		var store =  this.getBaseStore();
        if(!record.get('id')){
            store.add(record);
        }
        form.close();
        store.sync();
    }
});