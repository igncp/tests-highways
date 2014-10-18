Ext.require([
  'Ext.data.Model',
  'Ext.data.Store'
]);


Ext.onReady(function() {
  Ext.define('FooClass', {
    extend: 'Ext.panel.Panel',
    store: Ext.create('Ext.data.Store', {
      model: Ext.create('Ext.data.Model', {
        fields: [{
          name: 'name',
          type: 'string'
        }]
      }),
      data: [{
        name: 'foo Name'
      }]
    }),

    listeners: {
      render: function() {
        console.log('rendered');
      }
    },

    customFn: function() {
      return 1;
    }
  });

});
