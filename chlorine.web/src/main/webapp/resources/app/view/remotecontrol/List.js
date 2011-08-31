/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:08 PM
 */
Ext.define('Chlorine.view.remotecontrol.List' ,{
    extend: 'Chlorine.view.ListPanel',
    alias : 'widget.remotecontrollist',
    store: 'RemoteControls',
    title : 'Remote Controls',
    listTpl:'<tpl for="."><div class="chlorine-view-list-item">{host}</div></tpl>'
});