// From the Sencha Example dataview

Ext.Loader.setConfig({
  enabled: true
});

Ext.require([
  'Ext.data.Model',
  'Ext.data.Store',
  'Ext.panel.Panel',
  'Ext.view.View'
]);

Ext.onReady(function() {
  Ext.define('CustomPanel', {
    extend: 'Ext.Panel',
    frame: true,
    collapsible: true,
    width: 535,
    title: 'Simple DataView (0 items selected)',
    items: Ext.create('Ext.view.View', {
      store: Ext.create('MyStore', {
        data: [{
          name: 'Foo'
        }, {
          name: 'Bar'
        }]
      }),
      tpl: [
        '<tpl for=".">',
        '<div class="thumb-wrap" id="{name:stripTags}">',
        '<div class="thumb"><img src="{url}" title="{name:htmlEncode}"></div>',
        '<span class="x-editable">{shortName:htmlEncode}</span>',
        '</div>',
        '</tpl>',
        '<div class="x-clear"></div>'
      ],
      multiSelect: true,
      trackOver: true,
      overItemCls: 'x-item-over',
      itemSelector: 'div.thumb-wrap',
      emptyText: 'No images to display',
      prepareData: function(data) {
        Ext.apply(data, {
          shortName: Ext.util.Format.ellipsis(data.name, 15),
          sizeString: Ext.util.Format.fileSize(data.size),
          dateString: Ext.util.Format.date(data.lastmod, "m/d/Y g:i a")
        });
        return data;
      },
      listeners: {
        selectionchange: function(dv, nodes) {
          console.log('Selection changed');
        }
      }
    })
  });
});
