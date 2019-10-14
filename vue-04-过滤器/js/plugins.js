(function(){

    const MyPlugin = {}

    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
          // 逻辑...
          alert("全局方法")
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', {
          inserted (el, binding, vnode, oldVnode) {
            // 逻辑...
            el.innerHTML = "插件中的全局指令" + binding.value;
          }
        
        })
      
        // 3. 注入组件选项
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
          
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (value) {
          // 逻辑...
          alert('实例方法' + value)
        }
      }

      window.MyPlugin = MyPlugin
})()