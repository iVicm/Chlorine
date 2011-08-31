/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 9:32 PM
 */
Ext.define('Chlorine.model.Environment',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'url', type: 'string'}
    ],
    belongsTo: 'Project',
    validations:[
        {type:'presence', field :'id'},
        {type:'presence', field:'name'},
        {type:'presence', field:'url'}
    ]
});