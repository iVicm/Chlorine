/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:26 PM
 */
Ext.define('Chlorine.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'username', type: 'string' },
        {name: 'role', type: 'string'}
    ],
    belongsTo: 'AppRole',
    hasMany: 'ProjectUser',
    validations:[
        {type: 'presence', field: 'id'},
        {type: 'presence',  field: 'username'}
    ]
});