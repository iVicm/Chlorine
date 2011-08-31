/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 9:36 PM
 */
Ext.define('Chlorine.model.Feature',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    belongsTo: 'Project',
    hasMany: 'UserStory',
    validation:[
        {type: 'presence', field :'id'},
        {type: 'presence', field :'name'}
    ]
});