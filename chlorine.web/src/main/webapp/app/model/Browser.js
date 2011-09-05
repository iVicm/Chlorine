/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:26 PM
 */
Ext.define('Chlorine.model.Browser', {
    extend: 'Ext.data.Model',
	idgen: 'uuid',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'version', type: 'number', defaultValue: 1.0}
    ],
    validations:[
        {type: 'presence',  field: 'name'},
        {type: 'presence',  field: 'version'}
    ]
});