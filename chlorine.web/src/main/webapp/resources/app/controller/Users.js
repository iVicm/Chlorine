/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 2:34 PM
 */
Ext.define('Chlorine.controller.Users', {
    extend: 'Ext.app.Controller',
    views: [
        'user.List',
        'user.Edit'
    ],
    stores:[
        'Users'
    ],
    models:[
        'User'
    ],
    init: function() {
        this.control({
            'userlist dataview': {
                itemdblclick: this.edit
            },
            'useredit button[action=save]': {
                click: this.update
            }
        });
    },
    edit: function(view, record) {
        var tabPanel = view.up('viewport').down('tabpanel');
        var form = tabPanel.down('useredit[recordId=' + record.get('id') + ']');
        if(!form){
            form = Ext.create('Chlorine.view.user.Edit', {
                recordId: record.get('id')
            });
            tabPanel.add(form);
        }
        form.loadRecord(record);
        form.setTitle(record.get('username'));
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