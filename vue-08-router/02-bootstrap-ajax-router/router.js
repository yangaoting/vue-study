;(function(){
    window.router  = new VueRouter({
        linkActiveClass:'active',
        routes:[
            {
                path:'/news',
                component:News,
                children:[
                    {
                        path:'/news/sport',
                        component:Sport,
                        children:[
                            {
                                path:'detail/:id',
                                component:SportDetail
                            }
                        ]
                    },
                    {
                        path:'tech',
                        component:Tech,
                        children:[
                            {
                                path:'/news/tech/detail/:id',
                                component:TechDetail
                            }
                        ]
                    },
                    {
                        path:'',
                        redirect:'sport'
                    }
                ]
            },
            {
                path:'/about',
                component:About
            },
            {
                path:'/',
                component:AppHome
            }
        ]
    })
})()