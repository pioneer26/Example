Vue.component('my-header',{
    template:`
        <header class="header" >
            <h1>todos</h1>
            <input 
            class="new-todo" 
            placeholder="请输入内容" 
            @keyup.13="add"
            v-model="val"
            >
            
        </header>
    `,
    data(){
        return{
            val:''
        }
    },
    methods:{
        add(){
            //添加数据
           if(this.val){
               this.$emit('addrecord',{
                   id:+new Date,
                   city:this.val,
                   checked:false
               })
               this.val = ''//把原先输入的内容清空
           }
        }
    }
})