
var MyTextarea = Vue.extend({
  template: '<div class="textarea-box">\
                <textarea placeholder="请填写备注" v-model="remarks" ></textarea>\
                <span class="word-count ev-word-count">你还可以填写{{count}}字</span>\
              </div>',
  props: ['remarks'],
  data: function(){
    return {
      count: 1000
    }
  },
  computed:{
    count: function(){
      return 1000 - this.remarks.length;
    }
  }
});

var StatusComponent = Vue.extend({
  template: '<div class="status-box ev-status-box" style="display:none;">\
              <ul>\
                <li v-for="item in statusArray" data-val="{{item.val}}" v-on:click="selectedStatus($event)">\
                  <div class="status-item-innerbox ev-status-item-innerbox">\
                    <span>{{item.text}}</span>\
                    <i></i>\
                  </div>\
                </li>\
              </ul>\
            </div>',
  data: function(){
    return {
      status: 'long',
      statusArray: [
        {text: '新建客户', val: 'new'},
        {text: '潜在商机客户', val: 'qianzai'},
        {text: '成交客户', val: 'deal'},
        {text: '流失客户', val: 'lost'},
        {text: '长期客户', val: 'long'}
      ]
    };
  },
  methods: {
    selectedStatus: function(event){
      var $target = $(event.target);
      if($target.hasClass('status-item-innerbox')){
        $target = $target.parent();
      }
      this.$data.status = $target.data('val');
      var text =  $target.find('span').text();
      this.$dispatch('selected-status', {
        val: this.$data.status,
        text: text
      });
      // console.log(this.$data.status);
      $('.ev-status-box').hide();
    }
  }
});

Vue.component('my-textarea', MyTextarea);
Vue.component('status-component', StatusComponent);

var vm = new Vue({
  el: 'body',
  data: {
    statusText: '',
    customer: {
      customerName: '',
      district: '',
      address: '',
      website: '',
      status: '',
      level: '',
      remarks: ''
    },
    contact: [
      {
        name: '',
        phone: ''
      }
    ]
  },
  methods: {
    save: function(){
      saveCustomer();
    },
    //去选择status
    __toSelectStatus: function(event){
      $('.ev-status-box').show();
    }
  },
  events: {
    'selected-status': function(status){
      this.$data.customer.status = status.val;
      this.$data.statusText = status.text;
      // console.log('parent:', this.$data.customer.status);
    }
  }
});

function saveCustomer(){
  console.log('customerName:', vm.$data.customer.customerName);
  console.log('distrct:', vm.$data.customer.district);
  console.log('address:', vm.$data.customer.address);
  console.log('website:', vm.$data.customer.website);
  console.log('status:', vm.$data.customer.status);
  console.log('level:', vm.$data.customer.level);
  console.log('remarks:', vm.$data.customer.remarks);

  console.log('contact.name', vm.$data.contact[0].name);
  console.log('contact.phone', vm.$data.contact[0].phone);
}
