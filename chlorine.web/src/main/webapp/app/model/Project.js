/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:26 PM
 */
Ext.define('Chlorine.model.Project', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' }
    ],
    validations:[
        {type: 'presence',  field: 'name'},
        {type: 'length',  field: 'name', min: 1, max: 40}
    ]
});