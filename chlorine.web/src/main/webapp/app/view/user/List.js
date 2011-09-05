/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:08 PM
 */
Ext.define('Chlorine.view.user.List' ,{
    extend: 'Chlorine.view.BaseList',
    alias : 'widget.userlist',
    store: 'Users',
    title : 'Users',
    listItemContent: '{username}',
    iconCls: 'user-panel'
});