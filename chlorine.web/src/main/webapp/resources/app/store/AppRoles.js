/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 10:43 PM
 */
Ext.define('Chlorine.store.AppRoles',{
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.AppRole',
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/appRoles.json',
            update: 'data/update.json'
        },
        reader:{
            type: 'json',
            root: 'appRoles',
            successProperty: 'success'
        }
    }
});