/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:26 PM
 */
Ext.define('Chlorine.model.User', {
    extend: 'Ext.data.Model',
	idgen: 'uuid',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'username', type: 'string'}
    ],
    validations:[
        {type: 'presence',  field: 'username'}
    ]
});