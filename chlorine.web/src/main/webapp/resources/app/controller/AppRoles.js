/**
 * User: Eclipse
 * Date: 8/30/11
 * Time: 8:27 PM
 */
Ext.define('Chlorine.controller.AppRoles',{
    extend: 'Ext.app.Controller',
    views:[
        'approle.List',
        'approle.Edit'
    ],
    stores:['AppRoles'],
    models:['AppRole'],
    init:function(){
        this.control({
            'approlelist dataview':{
                itemdblclick: this.edit
            },
            'approleedit button[action=save]':{
                click: this.update
            }
        })
    },
    edit: function(view, record) {
        var tabPanel = view.up('viewport').down('tabpanel');
        var form = tabPanel.down('approleedit[recordId=' + record.get('id') + ']');
        if(!form){
            form = Ext.create('Chlorine.view.approle.Edit', {
                recordId: record.get('id')
            });
            tabPanel.add(form);
        }
        form.loadRecord(record);
        form.setTitle(record.get('name'));
        form.show();
    },
    update: function(button) {
        var form = button.up('form')
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        form.close();
        this.getProjectsStore().sync();
    }
});