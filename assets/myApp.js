
var Vue = require('vue');

var createApp = function(){
  return new Vue({
    template: '<div id="app">你已经在页面上花费{{count}}秒</div>',
    data: function(){
      return {
        count: 0
      };
    },
    mounted: function(){
      this.tickCount();
    },
    methods: {
      tickCount: function(){
        var me = this;
        me.count ++;
        setTimeout(function(){
          me.count ++;
        }, 1000);
      }
    }
  });
};
