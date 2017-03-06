var app;
(function(){
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
          setInterval(function(){
            me.count ++;
          }, 1000);
        }
      }
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = createApp;
  } else {
    this.app = createApp();
  }
})();
