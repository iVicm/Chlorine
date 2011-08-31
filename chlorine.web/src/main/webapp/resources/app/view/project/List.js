/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:08 PM
 */
Ext.define('Chlorine.view.project.List' ,{
    extend: 'Chlorine.view.ListPanel',
    alias : 'widget.projectlist',
    store: 'Projects',
    title : 'Projects',

    initComponent: function() {
        this.callParent(arguments);
    }
});