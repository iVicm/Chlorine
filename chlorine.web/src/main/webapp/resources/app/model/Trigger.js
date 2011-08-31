/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 9:32 PM
 */
Ext.define('Chlorine.model.Trigger',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'startTime', type: 'date'},
        {name: 'repeatLapse', type: 'string'},
        {name: 'repeatEach', type: 'int'}
    ],
    belongsTo: 'Project',
    validations:[
        {type:'presence', field :'id'},
        {type:'presence', field:'startTime'},
        {type:'presence', field:'repeatLapse'},
        {type:'presence', field:'repeatEach'}
    ]
});