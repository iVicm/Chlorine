/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:24 PM
 */
Ext.define('Chlorine.store.ProjectUsers', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.ProjectUser',
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/projectUsers.json',
            update: 'data/update.json'
        },
        reader: {
            type: 'json',
            root: 'projectUsers',
            successProperty: 'success'
        }
    }
});