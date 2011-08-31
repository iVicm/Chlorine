/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:08 PM
 */
Ext.define('Chlorine.view.user.List' ,{
    extend: 'Chlorine.view.ListPanel',
    alias : 'widget.userlist',
    store: 'Users',
    title : 'Users',
    listTpl:'<tpl for="."><div class="chlorine-view-list-item">{username}</div></tpl>'
});