/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:08 PM
 */
Ext.define('Chlorine.view.browser.List' ,{
    extend: 'Chlorine.view.BaseList',
    alias : 'widget.browserlist',
    store: 'Browsers',
    title : 'Browsers',
    listItemContent: '{name} {version}',
    iconCls: 'browser-panel'
});