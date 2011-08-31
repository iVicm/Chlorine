/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 10:43 PM
 */
Ext.define('Chlorine.store.ProjectRoles',{
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.ProjectRole',
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/projectRoles.json',
            update: 'data/update.json'
        },
        reader:{
            type: 'json',
            root: 'projectRoles',
            successProperty: 'success'
        }
    }
});