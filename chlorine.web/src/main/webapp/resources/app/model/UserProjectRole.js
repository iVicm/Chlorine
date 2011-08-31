/**
 * User: Eclipse
 * Date: 8/25/11
 * Time: 11:56 PM
 */
Ext.define('Chlorine.model.UserProjectRole',{
    extend: 'Ext.data.Model',
    fields:[
        {name:'id', type:'int'}
    ],
    hasMany:[
        'User',
        'Project',
        'ProjectRole'
    ]
});