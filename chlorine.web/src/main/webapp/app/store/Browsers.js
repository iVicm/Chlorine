/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:24 PM
 */
Ext.define('Chlorine.store.Browsers', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.Browser',
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/browsers.json',
            update: 'data/update.json'
        },
        reader: {
            type: 'json',
            root: 'browsers',
            successProperty: 'success'
        }
    }
});