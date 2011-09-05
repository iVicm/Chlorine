/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:26 PM
 */
Ext.define('Chlorine.model.Controller', {
    extend: 'Ext.data.Model',
	idgen: 'uuid',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'host', type: 'string', defaultValue: 'localhost'},
        {name: 'port', type: 'int', defaultValue: 4444}
    ],
	hasMany: 'Browser',
    validations:[
        {type: 'presence',  field: 'host'},
        {type: 'presence',  field: 'port'}
    ]
});