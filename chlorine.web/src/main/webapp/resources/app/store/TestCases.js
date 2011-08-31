/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 10:59 PM
 */
Ext.define('Chlorine.store.TestCases', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.TestCase',
    proxy:{
        type: 'ajax',
        api:{
            read: 'data/testCases.json',
            update: 'data/update.json'
        },
        reader:{
            type:'json',
            root:'testCases',
            successProperty: 'success'
        }
    }
});