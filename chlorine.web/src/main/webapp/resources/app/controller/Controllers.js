/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 2:34 PM
 */
Ext.define('Chlorine.controller.Controllers', {
    extend: 'Chlorine.controller.BaseController',
	
    views: ['controller.List','controller.Edit'],
    stores:['Controllers', 'Browsers'],
    models:['Controller', 'Browser'],
	
	baseType: 'controller',
	baseModel: 'Controller',
	getBaseStore: function(){
		return this.getControllersStore();
	},
    getTitle: function(record){
		if(record.get('id')){
			return record.get('host');
		}else{
			return 'New Controller';
		}
	} 
});