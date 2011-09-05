/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 2:34 PM
 */
Ext.define('Chlorine.controller.Browsers', {
    extend: 'Chlorine.controller.BaseController',
	
    views: ['browser.List','browser.Edit'],
    stores:['Browsers'],
    models:['Browser'],
	
	baseType: 'browser',
	baseModel: 'Browser',
	getBaseStore: function(){
		return this.getBrowsersStore();
	},
    getTitle: function(record){
		if(record.get('id')){
			return record.get('name') + ' ' + record.get('version');
		}else{
			return 'New Browser';
		}
	}
});