/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:24 PM
 */
Ext.define('Chlorine.store.Projects', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.Project',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/projects.json',
            update: 'data/updateProjects.json'
        },
        reader: {
            type: 'json',
            root: 'projects',
            successProperty: 'success'
        }
    }
});