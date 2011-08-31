/**
 * User: Eclipse
 * Date: 8/25/11
 * Time: 11:16 PM
 */
Ext.define('Chlorine.model.Browser',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'command', type: 'string'}
    ],
    validations:[
        {type: 'presence', field :'id'},
        {type: 'presence', field :'name'},
        {type: 'presence', field :'command'}
    ]
});