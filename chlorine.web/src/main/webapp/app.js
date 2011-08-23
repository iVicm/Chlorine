/**
 * User: Eclipse
 * Date: 8/20/11
 * Time: 1:37 PM
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({enabled:true});
});
Ext.application({
    name: 'Chlorine',
    appFolder: 'app',
    autoCreateViewport: true,
    controllers: [
        'Projects'
    ],
    launch: function() {

    }
});