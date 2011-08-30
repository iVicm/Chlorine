/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 4:08 PM
 */
Ext.define('Chlorine.view.project.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.projectlist',

    title : 'Projects',
    store: 'Projects',
    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1}
        ];

        this.callParent(arguments);
    }
});