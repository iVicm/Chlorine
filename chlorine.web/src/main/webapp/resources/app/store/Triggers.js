/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 10:59 PM
 */
Ext.define('Chlorine.store.Triggers', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.Trigger',
    proxy:{
        type: 'ajax',
        api:{
            read: 'data/triggers.json',
            update: 'data/update.json'
        },
        reader:{
            type:'json',
            root:'triggers',
            successProperty: 'success'
        }
    }
});