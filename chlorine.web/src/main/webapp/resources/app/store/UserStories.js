/**
 * User: Eclipse
 * Date: 8/28/11
 * Time: 10:59 PM
 */
Ext.define('Chlorine.store.UserStories', {
    extend: 'Ext.data.Store',
    model: 'Chlorine.model.UserStory',
    proxy:{
        type: 'ajax',
        api:{
            read: 'data/userStories.json',
            update: 'data/update.json'
        },
        reader:{
            type:'json',
            root:'userStories',
            successProperty: 'success'
        }
    }
});