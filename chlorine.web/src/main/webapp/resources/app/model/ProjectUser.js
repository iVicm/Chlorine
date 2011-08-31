/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:26 PM
 */
Ext.define('Chlorine.model.ProjectUser', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'}
    ],
    validations:[
        {type: 'presence', field: 'id'}
    ]
});