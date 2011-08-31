/**
 * User: Eclipse
 * Date: 8/30/11
 * Time: 8:27 PM
 */
Ext.define('Chlorine.controller.RemoteControls',{
    extend: 'Ext.app.Controller',
    views:[
        'remotecontrol.List',
        'remotecontrol.Edit'
    ],
    stores:['RemoteControls'],
    models:['RemoteControl'],
    init:function(){
        this.control({
            'remotecontrollist dataview':{
                itemdblclick: this.edit
            },
            'remotecontroledit button[action=save]':{
                click: this.update
            }
        })
    },
    edit: function(view, record) {
        var tabPanel = view.up('viewport').down('tabpanel');
        var form = tabPanel.down('remotecontroledit[recordId=' + record.get('id') + ']');
        if(!form){
            form = Ext.create('Chlorine.view.remotecontrol.Edit', {
                recordId: record.get('id')
            });
            tabPanel.add(form);
        }
        form.loadRecord(record);
        form.setTitle(record.get('host'));
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