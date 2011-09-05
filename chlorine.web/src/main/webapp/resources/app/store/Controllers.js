/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:24 PM
 */
Ext.define('Chlorine.store.Controllers', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.Controller',
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/controllers.json',
            update: 'data/update.json'
        },
        reader: {
            type: 'json',
            root: 'controllers',
            successProperty: 'success'
        }
    }
});