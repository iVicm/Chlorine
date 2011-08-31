/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 2:34 PM
 */
Ext.define('Chlorine.controller.Projects', {
    extend: 'Ext.app.Controller',
    views: [
        'project.List',
        'project.Edit'
    ],
    stores:[
        'Projects'
    ],
    models:[
        'Project'
    ],
    init: function() {
        this.control({
            'projectlist dataview': {
                itemdblclick: this.edit
            },
            'projectedit button[action=save]': {
                click: this.update
            }
        });
    },
    edit: function(view, record) {
        var tabPanel = view.up('viewport').down('tabpanel');
        var form = tabPanel.down('projectedit[recordId=' + record.get('id') + ']');
        if(!form){
            form = Ext.create('Chlorine.view.project.Edit', {
                recordId: record.get('id')
            });
            tabPanel.add(form);
        }
        form.loadRecord(record);
        form.setTitle(record.get('name'));
        form.show();
    },
    update: function(button) {
        var form = button.up('form');
        if(!form.getForm().isValid()){
            return;
        }
        var record = form.getRecord();
        var values = form.getValues();

        record.set(values);
        form.close();
        this.getProjectsStore().sync();
    }
});