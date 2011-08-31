/**
 * User: Eclipse
 * Date: 8/25/11
 * Time: 11:14 PM
 */
Ext.define('Chlorine.model.RemoteControl',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'host', type: 'string'},
        {name: 'port', type: 'int', defaultValue: 4444}
    ],
    hasMany: 'Browser',
    validations:[
        {type: 'presence', field :'id'},
        {type: 'presence', field :'host'},
        {type: 'presence', field :'port'}
    ]
});