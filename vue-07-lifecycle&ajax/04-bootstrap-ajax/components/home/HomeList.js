;(function () {
    const template = `<div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>工资</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <Item v-for='(emp,index) in empList' :emp='emp' :key='emp.id' :deleteEmp='deleteEmp' :index='index'/>
      </tbody>
    </table>
  </div>`
    
    window.HomeList = {
        props:{
          empList:Array,
          deleteEmp:Function
        },
        template, // template: template
        components:{
          Item
        }
    }
})()