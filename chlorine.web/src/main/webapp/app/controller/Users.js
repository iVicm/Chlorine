/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 2:34 PM
 */
Ext.define('Chlorine.controller.Users', {
    extend: 'Chlorine.controller.BaseController',
	
    views: ['user.List','user.Edit'],
    stores:['Users'],
    models:['User'],
	
	baseType: 'user',
	baseModel: 'User',
	getBaseStore: function(){
		return this.getUsersStore();
	},
    getTitle: function(record){
		if(record.get('id')){
			return record.get('username');
		}else{
			return 'New User';
		}
	} 
});