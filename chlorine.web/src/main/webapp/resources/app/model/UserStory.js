/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 9:42 PM
 */
Ext.define('Chlorine.model.UserStory',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    belongsTo: 'Feature',
    hasMany: 'TestCase',
    validation:[
        {type: 'presence', field :'id'},
        {type: 'presence', field :'name'}
    ]
});