/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 10:50 PM
 */
Ext.define('Chlorine.store.Environments',{
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.Environment',
    proxy:{
        type: 'ajax',
        api:{
            read: 'data/environments.json',
            update: 'data/update.json'
        },
        reader:{
            type: 'json',
            root: 'environments',
            successProperty: 'success'
        }
    }
});