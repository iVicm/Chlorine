/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 9:42 PM
 */
Ext.define('Chlorine.model.TestCase',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    belongsTo: 'UserStory',
    validation:[
        {type: 'presence', field :'id'},
        {type: 'presence', field :'name'}
    ]
});