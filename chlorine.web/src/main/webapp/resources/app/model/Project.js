/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:26 PM
 */
Ext.define('Chlorine.model.Project', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    hasMany:[
        'Browser',
        'Environment',
        'Feature',
        'Trigger',
        'ProjectUser'
    ],
    validations:[
        {type: 'presence', field: 'name'}
    ]
});