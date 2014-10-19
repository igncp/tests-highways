Ext.define('MyApp.view.Foo', {
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

  unityFn: function() {
    return 1;
  },

  fireBarEvent: function() {
    this.fireEvent('Bar');
  },

  asyncFn: function(cb) {
    this.serverMethod(function(result) {
      cb(result + 1);
    });
  },

  serverMethod: function(cb) {
    setTimeout(function() {
      cb(2);
    }, 30000);
  }
});
