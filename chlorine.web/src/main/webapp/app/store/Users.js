/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:24 PM
 */
Ext.define('Chlorine.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.User',
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/update.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});