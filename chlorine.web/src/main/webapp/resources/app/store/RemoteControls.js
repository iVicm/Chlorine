/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 10:59 PM
 */
Ext.define('Chlorine.store.RemoteControls', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.RemoteControl',
    proxy:{
        type: 'ajax',
        api:{
            read: 'data/remoteControls.json',
            update: 'data/update.json'
        },
        reader:{
            type:'json',
            root:'remoteControls',
            successProperty: 'success'
        }
    }
});