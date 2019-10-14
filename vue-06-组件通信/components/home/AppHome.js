;(function () {
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        
    <!--右边上半区域-->
        <!--<h1 class="page-header">Dashboard</h1>-->
        <slot name='dashboard'></slot>
        <dashboard :hobbies='hobbies' @delete_hobby="deleteHobby"></dashboard>
    <!--右边下半区域-->
        <h2 class="sub-header">Section title</h2>
        <home-list :empList='empList' :deleteEmp='deleteEmp'></home-list>
      </div>`

    window.AppHome = {
        template, // template: template,
        data () {
            return {
                hobbies : ['coding','sleep','play','reading'],
                empList:[
                    {id:1,name:'小梦1',salary:10001},
                    {id:2,name:'小梦2',salary:10002},
                    {id:3,name:'小梦3',salary:10003},
                    {id:4,name:'小梦4',salary:10004},
                    {id:5,name:'小梦5',salary:10005},
                ]
            }
        },
        methods: {
            deleteEmp (index) {
                this.empList.splice(index,1)
            },
            deleteHobby (index) {
                this.hobbies.splice(index,1)
                //发布消息
                PubSub.publish('changeNum',1)
            }
        },
        components: { //Dashboard 作为AppHome 的子组件
            Dashboard, // Dashboard: Dashboard
            HomeList // HomeList:HomeList
        }
    }
})()