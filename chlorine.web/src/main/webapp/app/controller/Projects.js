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
            'projectlist': {
                itemdblclick: this.editProject
            },
            'projectedit button[action=save]': {
                click: this.updateProject
            }
        });
    },
    editProject: function(grid, record) {
        var view = Ext.widget('projectedit');
        view.down('form').loadRecord(record);
    },
    updateProject: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getProjectsStore().sync();
    }
});