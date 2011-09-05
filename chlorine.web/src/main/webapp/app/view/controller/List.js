/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:08 PM
 */
Ext.define('Chlorine.view.controller.List' ,{
    extend: 'Chlorine.view.BaseList',
    alias : 'widget.controllerlist',
    store: 'Controllers',
    title : 'Controllers',
    listItemContent: '{host}:{port}',
    iconCls: 'controller-panel'
});