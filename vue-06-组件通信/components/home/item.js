;(function(){
    const template = `<tr>
    <td>{{emp.id}}</td>
    <td>{{emp.name}}</td>
    <td>{{emp.salary}}</td>
    <td>
        <a href='#' @click='deleteEmp(index)'>删除</a>
    </td>
  </tr>`

    window.Item = {
        props:{
            emp:{
                type:Object,
                required:true
            },
            deleteEmp:Function,
            index:Number
        },
        methods: {
            // deleteItem () {
            //     this.deleteEmp(this.index)
            // }
        },
        template
    }
})()