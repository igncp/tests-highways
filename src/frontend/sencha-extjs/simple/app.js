Ext.Loader.setConfig({
  enabled: true,
  paths: {
    MyApp: 'app'
  }
});

Ext.require([
  'Ext.data.Model',
  'Ext.data.Store',
  'Ext.panel.Panel',
  'Ext.app.Controller'
]);

Ext.onReady(function() {
  Ext.application({
    name: 'MyApp',
    autoCreateViewport: false
  });
});
