import Vue from 'vue'
import App from './App.vue'

new Vue({
    el:'#app',
    // template:'<App />',
    render:h => h(App)
    // components:{
    //     App
    // }
})

// new Vue({
//     render:h => h(App)
// }).$mount('#app')