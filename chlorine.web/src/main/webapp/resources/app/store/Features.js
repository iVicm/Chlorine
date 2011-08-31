/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 10:57 PM
 */
Ext.define('Chlorine.store.Features',{
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.Feature',
    proxy:{
        type: 'ajax',
        api:{
            read: 'data/features.json',
            update: 'data/update.json'
        },
        reader:{
            type: 'json',
            root: 'features',
            successProperty: 'success'
        }
    }
});